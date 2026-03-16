// ========================================
// SISTEMA DE GESTIÓN DE CITAS DE MASCOTAS
// Práctica de Prototipado Rápido (Rapid Prototyping)
// ========================================

// Estado global de la aplicación
let currentUser = null;
let editingAppointmentId = null;

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    checkUserSession();
});

/**
 * Verificar si el usuario tiene una sesión activa
 */
function checkUserSession() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        currentUser = JSON.parse(user);
        showAppointmentsSection();
        loadAppointments();
    }
}

// ========================================
// AUTENTICACIÓN
// ========================================

/**
 * Alternar entre formulario de registro e inicio de sesión
 */
function toggleForms() {
    document.getElementById('registerForm').classList.toggle('hidden');
    document.getElementById('loginForm').classList.toggle('hidden');
    clearErrors();
}

/**
 * Manejar registro de nuevo usuario
 * @param {Event} event - Evento del formulario
 */
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;
    const errorDiv = document.getElementById('registerError');
    const successDiv = document.getElementById('registerSuccess');

    errorDiv.classList.remove('show');
    successDiv.classList.remove('show');

    // Validar correo Gmail
    if (!email.includes('@gmail.com') && !email.includes('@')) {
        showError(errorDiv, 'Ingresa un correo válido');
        return;
    }

    // Validar longitud de contraseña
    if (password.length < 6) {
        showError(errorDiv, 'La contraseña debe tener al menos 6 caracteres');
        return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirm) {
        showError(errorDiv, 'Las contraseñas no coinciden');
        return;
    }

    // Verificar si el email ya existe
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) {
        showError(errorDiv, 'Este correo ya está registrado');
        return;
    }

    // Registrar usuario
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Iniciar sesión automáticamente
    currentUser = { id: newUser.id, name: newUser.name, email: newUser.email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    showSuccess(successDiv, '¡Cuenta creada exitosamente! Redireccionando...');
    
    setTimeout(() => {
        document.getElementById('registerForm').reset();
        showAppointmentsSection();
        loadAppointments();
    }, 1500);
}

/**
 * Manejar inicio de sesión
 * @param {Event} event - Evento del formulario
 */
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');

    errorDiv.classList.remove('show');

    // Buscar usuario en almacenamiento local
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        showError(errorDiv, 'Correo o contraseña incorrectos');
        return;
    }

    // Guardar sesión del usuario
    currentUser = { id: user.id, name: user.name, email: user.email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    document.getElementById('loginForm').reset();
    showAppointmentsSection();
    loadAppointments();
}

/**
 * Cerrar sesión del usuario
 */
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showAuthSection();
}

// ========================================
// GESTIÓN DE CITAS
// ========================================

/**
 * Agregar nueva cita
 * @param {Event} event - Evento del formulario
 */
function handleAddAppointment(event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value.trim();
    const ownerName = document.getElementById('ownerName').value.trim();
    const petSpecifications = document.getElementById('petSpecifications').value.trim();
    const petAge = document.getElementById('petAge').value;
    const petBreed = document.getElementById('petBreed').value.trim();
    const dropoffTime = document.getElementById('dropoffTime').value;
    const pickupTime = document.getElementById('pickupTime').value;
    const petImageInput = document.getElementById('petImage');
    const errorDiv = document.getElementById('appointmentError');
    const successDiv = document.getElementById('appointmentSuccess');

    errorDiv.classList.remove('show');
    successDiv.classList.remove('show');

    // Validar que la hora de recogida sea posterior a la de entrega
    if (new Date(dropoffTime) >= new Date(pickupTime)) {
        showError(errorDiv, 'La hora de recogida debe ser posterior a la hora de entrega');
        return;
    }

    // Crear objeto de cita
    let appointmentData = {
        id: Date.now(),
        userId: currentUser.id,
        petName,
        ownerName,
        petSpecifications,
        petAge,
        petBreed,
        dropoffTime,
        pickupTime,
        image: null,
        createdAt: new Date().toISOString()
    };

    // Procesar imagen si existe
    if (petImageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            appointmentData.image = e.target.result;
            saveAppointment(appointmentData, event, errorDiv, successDiv);
        };
        reader.readAsDataURL(petImageInput.files[0]);
    } else {
        saveAppointment(appointmentData, event, errorDiv, successDiv);
    }
}

/**
 * Guardar cita en almacenamiento local
 * @param {Object} appointmentData - Datos de la cita
 * @param {Event} event - Evento del formulario
 * @param {HTMLElement} errorDiv - Elemento para mostrar errores
 * @param {HTMLElement} successDiv - Elemento para mostrar éxito
 */
function saveAppointment(appointmentData, event, errorDiv, successDiv) {
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push(appointmentData);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    showSuccess(successDiv, '¡Cita registrada exitosamente!');
    
    // Limpiar formulario
    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('petSpecifications').value = '';
    document.getElementById('petAge').value = '';
    document.getElementById('petBreed').value = '';
    document.getElementById('dropoffTime').value = '';
    document.getElementById('pickupTime').value = '';
    document.getElementById('petImage').value = '';

    loadAppointments();
}

/**
 * Cargar y mostrar citas del usuario
 */
function loadAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const userAppointments = appointments.filter(a => a.userId === currentUser.id);
    const appointmentsList = document.getElementById('appointmentsList');

    if (userAppointments.length === 0) {
        appointmentsList.innerHTML = '<div class="empty-state"><p>No hay citas registradas. ¡Crea una nueva!</p></div>';
        return;
    }

    appointmentsList.innerHTML = userAppointments.map(apt => `
        <div class="appointment-card">
            <h4>${apt.petName}</h4>
            <div class="appointment-info">
                <strong>Dueño:</strong> ${apt.ownerName}
            </div>
            <div class="appointment-info">
                <strong>Raza:</strong> ${apt.petBreed}
            </div>
            <div class="appointment-info">
                <strong>Edad:</strong> ${apt.petAge} años
            </div>
            ${apt.petSpecifications ? `
            <div class="appointment-info">
                <strong>Especificaciones:</strong> ${apt.petSpecifications}
            </div>
            ` : ''}
            <div class="appointment-info">
                <strong>Entrega:</strong> ${formatDateTime(apt.dropoffTime)}
            </div>
            <div class="appointment-info">
                <strong>Recogida:</strong> ${formatDateTime(apt.pickupTime)}
            </div>
            ${apt.image ? `
            <div class="appointment-image">
                <img src="${apt.image}" alt="${apt.petName}">
            </div>
            ` : ''}
            <div class="appointment-actions">
                <button class="btn-edit" onclick="openEditModal(${apt.id})">Editar hora</button>
                <button class="btn-delete" onclick="deleteAppointment(${apt.id})">Eliminar</button>
            </div>
        </div>
    `).join('');
}

/**
 * Abrir modal para editar cita
 * @param {number} appointmentId - ID de la cita a editar
 */
function openEditModal(appointmentId) {
    editingAppointmentId = appointmentId;
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const appointment = appointments.find(a => a.id === appointmentId);

    document.getElementById('editDropoffTime').value = appointment.dropoffTime;
    document.getElementById('editPickupTime').value = appointment.pickupTime;
    document.getElementById('editModal').classList.add('active');
}

/**
 * Cerrar modal de edición
 */
function closeEditModal() {
    document.getElementById('editModal').classList.remove('active');
    editingAppointmentId = null;
}

/**
 * Guardar cambios en los horarios de la cita
 * @param {Event} event - Evento del formulario
 */
function handleSaveEdit(event) {
    event.preventDefault();

    const dropoffTime = document.getElementById('editDropoffTime').value;
    const pickupTime = document.getElementById('editPickupTime').value;

    // Validar horarios
    if (new Date(dropoffTime) >= new Date(pickupTime)) {
        alert('La hora de recogida debe ser posterior a la hora de entrega');
        return;
    }

    // Actualizar cita en almacenamiento local
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const appointmentIndex = appointments.findIndex(a => a.id === editingAppointmentId);

    if (appointmentIndex !== -1) {
        appointments[appointmentIndex].dropoffTime = dropoffTime;
        appointments[appointmentIndex].pickupTime = pickupTime;
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }

    closeEditModal();
    loadAppointments();
}

/**
 * Eliminar una cita
 * @param {number} appointmentId - ID de la cita a eliminar
 */
function deleteAppointment(appointmentId) {
    if (confirm('¿Estás seguro de que deseas eliminar esta cita?')) {
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        const filtered = appointments.filter(a => a.id !== appointmentId);
        localStorage.setItem('appointments', JSON.stringify(filtered));
        loadAppointments();
    }
}

// ========================================
// FUNCIONES DE INTERFAZ
// ========================================

/**
 * Mostrar sección de autenticación
 */
function showAuthSection() {
    document.getElementById('authSection').classList.remove('hidden');
    document.getElementById('appointmentsSection').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    clearErrors();
}

/**
 * Mostrar sección de citas
 */
function showAppointmentsSection() {
    document.getElementById('authSection').classList.add('hidden');
    document.getElementById('appointmentsSection').classList.remove('hidden');
}

/**
 * Mostrar mensaje de error
 * @param {HTMLElement} element - Elemento donde mostrar el error
 * @param {string} message - Mensaje de error
 */
function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
}

/**
 * Mostrar mensaje de éxito
 * @param {HTMLElement} element - Elemento donde mostrar el éxito
 * @param {string} message - Mensaje de éxito
 */
function showSuccess(element, message) {
    element.textContent = message;
    element.classList.add('show');
}

/**
 * Limpiar todos los mensajes de error y éxito
 */
function clearErrors() {
    document.getElementById('registerError').classList.remove('show');
    document.getElementById('loginError').classList.remove('show');
    document.getElementById('appointmentError').classList.remove('show');
    document.getElementById('appointmentSuccess').classList.remove('show');
}

/**
 * Formatear fecha y hora para mostrar
 * @param {string} dateTime - Fecha y hora en formato ISO
 * @returns {string} Fecha y hora formateada
 */
function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleString('es-ES', options);
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeEditModal();
    }
}
