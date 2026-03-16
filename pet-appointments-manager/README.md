# 🐾 Pet Appointments Manager - Gestor de Citas de Mascotas

**Práctica de Prototipado Rápido (Rapid Prototyping)**

Un sistema web completo de gestión de citas para cuidado de mascotas, desarrollado con HTML5, CSS3 y JavaScript vanilla. Implementa autenticación simulada y gestión de estado del lado del cliente.

## 📋 Descripción del Proyecto

Este proyecto es una práctica de prototipado rápido que demuestra cómo crear una aplicación web moderna y funcional sin necesidad de un servidor backend. Utiliza `localStorage` del navegador para persistencia de datos, lo que permite que la aplicación funcione completamente en el lado del cliente.

### Características Principales

✅ **Autenticación Simulada**
- Registro de nuevos usuarios
- Login con correo y contraseña
- Sesiones persistentes
- Cierre de sesión

✅ **Gestión de Citas**
- Crear nuevas citas para cuidado de mascotas
- Editar horarios de entrega y recogida
- Eliminar citas
- Cargar imágenes de mascotas
- Visualizar todas las citas del usuario

✅ **Información Detallada de Mascotas**
- Nombre de la mascota
- Nombre del dueño
- Raza de la mascota
- Edad de la mascota
- Especificaciones y características special
- Horario de entrega y recogida
- Foto de la mascota

✅ **Interfaz Responsiva**
- Diseño adaptable a cualquier dispositivo
- Estilo moderno con gradientes
- Animaciones suaves
- Modal para edición de horarios

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del documento
- **CSS3**: Estilos responsivos con Grid y Flexbox
- **JavaScript (Vanilla)**: Lógica de la aplicación sin dependencias externas
- **LocalStorage API**: Almacenamiento persistente en el navegador

## 📁 Estructura del Proyecto

```
pet-appointments-manager/
├── index.html              # Página principal (HTML + CSS)
├── js/
│   └── app.js             # Lógica de la aplicación (JavaScript)
├── README.md              # Este archivo
├── .gitignore             # Archivo de configuración de Git
└── package.json           # Información del proyecto
```

### Descripción de Archivos

**index.html**
- Contiene toda la estructura HTML
- Incluye todos los estilos CSS (inline)
- Define la estructura de dos secciones principales:
  - Sección de autenticación (registro y login)
  - Sección de citas (crear, editar, eliminar citas)

**js/app.js**
- Manejo de eventos del formulario
- Funciones de autenticación
- Gestión de citas
- Operaciones en localStorage
- Formateo de datos
- Validaciones

**package.json**
- Metadatos del proyecto
- Información del desarrollador
- Scripts opcionales

## 🚀 Cómo Usar

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet NO requerida (funciona offline)

### Instalación

1. **Descargar o clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/pet-appointments-manager.git
cd pet-appointments-manager
```

2. **Abrir en el navegador**
```
- Haz doble clic en `index.html`
- O abre tu navegador y arrastra el archivo `index.html`
- O usa un servidor local: `python -m http.server 8000`
```

### Flujo de Uso

1. **Registro**
   - Completa el formulario con nombre, correo y contraseña
   - Serás redirigido automáticamente a la sección de citas
   - Los datos se guardan en localStorage

2. **Crear Cita**
   - Completa todos los campos requeridos
   - Carga una imagen de la mascota (opcional)
   - Haz clic en "Registrar cita"

3. **Gestionar Citas**
   - Ver todas tus citas registradas
   - Editar horarios con el botón "Editar hora"
   - Eliminar citas con el botón "Eliminar"

4. **Cerrar Sesión**
   - Haz clic en "Cerrar sesión" para desconectarte

## 💡 Conceptos de Prototipado Rápido Implementados

### 1. **Autenticación Simulada sin Backend**
```javascript
// Los usuarios se almacenan en localStorage
const users = JSON.parse(localStorage.getItem('users') || '[]');
users.push({ id: Date.now(), name, email, password });
localStorage.setItem('users', JSON.stringify(users));
```

### 2. **Client-Side State Management**
```javascript
// Variable global para el usuario actual
let currentUser = null;

// Funciones para cambiar el estado
function handleLogin() {
    currentUser = { id: user.id, name: user.name };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}
```

### 3. **CRUD Operations (Create, Read, Update, Delete)**
- **Create**: Crear nuevas citas
- **Read**: Cargar y mostrar citas
- **Update**: Editar horarios
- **Delete**: Eliminar citas

### 4. **Persistencia de Datos**
```javascript
// Todos los datos se guardan en localStorage
localStorage.setItem('appointments', JSON.stringify(appointments));
const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
```

## 🔒 Notas de Seguridad

⚠️ **IMPORTANTE**: Esta aplicación es un PROTOTIPO educativo. 

**No es segura para producción porque:**
- Las contraseñas se guardan en texto plano en localStorage
- localStorage no es encriptado
- No hay validación en el servidor
- Los datos se pierden al limpiar el cache del navegador

**Para producción, necesitarías:**
- Backend con autenticación real (JWT, OAuth2, etc.)
- Base de datos segura
- HTTPS
- Hash de contraseñas (bcrypt, argon2, etc.)
- Validación en servidor

## 📊 Estructura de Datos

### Usuario
```javascript
{
  id: 1234567890,
  name: "Juan Pérez",
  email: "juan@gmail.com",
  password: "123456"
}
```

### Cita
```javascript
{
  id: 1234567890,
  userId: 1234567890,
  petName: "Max",
  ownerName: "Juan Pérez",
  petBreed: "Golden Retriever",
  petAge: "3",
  petSpecifications: "Muy activo, juguetón",
  dropoffTime: "2026-03-16T09:00",
  pickupTime: "2026-03-16T17:00",
  image: "data:image/jpeg;base64,...",
  createdAt: "2026-03-16T08:00:00.000Z"
}
```

## 🧪 Casos de Prueba

### Prueba 1: Registro
1. Haz clic en "Regístrate aquí"
2. Completa todos los campos
3. Verifica que las contraseñas coincidan
4. Deberías ser redirigido a citas

### Prueba 2: Crear Cita
1. Completa todos los campos
2. Selecciona una imagen
3. Haz clic en "Registrar cita"
4. Verifica que aparece en la lista

### Prueba 3: Editar Cita
1. Haz clic en "Editar hora"
2. Cambia los horarios
3. Haz clic en "Guardar cambios"
4. Verifica que se actualizaron

### Prueba 4: Logout
1. Haz clic en "Cerrar sesión"
2. Vuelve al formulario de login
3. Inicia sesión nuevamente
4. Verifica que tus citas siguen ahí

## 📱 Responsividad

La aplicación es totalmente responsiva:
- **Desktop**: Vista optimizada con dos columnas
- **Tablet**: Ajuste automático de espacios
- **Mobile**: Vista de una columna con botones grandes

```css
@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }
    .appointments-header {
        flex-direction: column;
    }
}
```

## 🎨 Paleta de Colores

- **Primario**: #667eea (Azul índigo)
- **Secundario**: #764ba2 (Púrpura)
- **Éxito**: #2ecc71 (Verde)
- **Error**: #e74c3c (Rojo)
- **Información**: #3498db (Azul claro)

## 📈 Posibles Extensiones

1. **Exportar datos a CSV/PDF**
   ```javascript
   function exportAppointments() {
       // Convertir a CSV o PDF
   }
   ```

2. **Sistema de notificaciones**
   ```javascript
   // Recordatorios para citas mediante Notifications API
   ```

3. **Integración con calendario**
   ```javascript
   // Visualizar citas en calendario Google
   ```

4. **Múltiples idiomas**
   ```javascript
   // Sistema i18n para español, inglés, otros idiomas
   ```

5. **Tema oscuro**
   ```css
   @media (prefers-color-scheme: dark) {
       /* Estilos para tema oscuro */
   }
   ```

6. **Sincronización con servidor**
   ```javascript
   // Guardar datos en backend real
   async function syncWithServer() {
       // Fetch API para comunicar con servidor
   }
   ```

## 📝 Documentación del Código

El código está completamente documentado con JSDoc:

```javascript
/**
 * Guardar cita en almacenamiento local
 * @param {Object} appointmentData - Datos de la cita
 * @param {Event} event - Evento del formulario
 * @param {HTMLElement} errorDiv - Elemento para mostrar errores
 * @param {HTMLElement} successDiv - Elemento para mostrar éxito
 */
function saveAppointment(appointmentData, event, errorDiv, successDiv) {
    // Implementación...
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Proyecto desarrollado como práctica de Prototipado Rápido (Rapid Prototyping).

## 📞 Contacto

Si tienes preguntas o sugerencias, por favor abre un Issue en GitHub.

---

**Nota**: Este proyecto fue creado con propósitos educativos para demostrar conceptos de:
- Prototipado Rápido
- Autenticación simulada
- Client-Side State Management
- CRUD Operations
- Desarrollo Frontend moderno

¡Gracias por usar Pet Appointments Manager! 🐾
