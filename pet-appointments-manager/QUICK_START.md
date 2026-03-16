# Guía de Inicio Rápido

## 🚀 Primeros Pasos

### 1. Descargar el Proyecto

**Opción A: Clonar con Git**
```bash
git clone https://github.com/tu-usuario/pet-appointments-manager.git
cd pet-appointments-manager
```

**Opción B: Descargar como ZIP**
- Descarga el repositorio como ZIP
- Extrae el archivo
- Abre la carpeta en tu editor favorito

### 2. Ejecutar la Aplicación

**Opción A: Abrir directamente**
```
1. Haz doble clic en `index.html`
2. La aplicación se abrirá en tu navegador
```

**Opción B: Usar un servidor local (Recomendado)**

```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes http-server instalado)
http-server

# Con npm (alternativa)
npx http-server
```

Luego abre: `http://localhost:8000`

### 3. Crear Tu Primera Cuenta

1. Completa el formulario de registro:
   - Nombre: Tu nombre completo
   - Correo: Tu email (cualquier email válido)
   - Contraseña: Más de 6 caracteres
   - Confirmar: Repite la contraseña

2. Haz clic en "Registrarse"
3. Serás redirigido automáticamente a la sección de citas

### 4. Registrar Tu Primera Cita

1. Completa el formulario "Registrar nueva cita":
   - **Nombre de la mascota**: Ej. "Max"
   - **Nombre del dueño**: Tu nombre
   - **Especificaciones**: Características especiales
   - **Edad**: En años
   - **Raza**: Ej. "Golden Retriever"
   - **Hora de entrega**: Cuándo entregas la mascota
   - **Hora de recogida**: Cuándo la vas a recoger
   - **Imagen**: Foto de tu mascota (opcional)

2. Haz clic en "Registrar cita"
3. Tu cita aparecerá en la lista "Mis citas"

## 📱 Funcionalidades Principales

### Ver Mis Citas
```
- Todas tus citas aparecen en tarjetas
- Cada tarjeta muestra toda la información
- Incluye la foto si la subiste
```

### Editar Horarios
```
1. Haz clic en "Editar hora"
2. Modifica los horarios de entrega y recogida
3. Haz clic en "Guardar cambios"
```

### Eliminar Cita
```
1. Haz clic en "Eliminar"
2. Confirma que deseas eliminar
3. La cita se eliminará de tu lista
```

### Cerrar Sesión
```
1. Haz clic en "Cerrar sesión"
2. Serás redirigido al formulario de login
3. Puedes iniciar sesión con cualquier cuenta registrada
```

## 💾 Dónde Se Guardan los Datos

Los datos se guardan en el **localStorage** de tu navegador:
- En Chrome/Firefox: DevTools → Application → Local Storage
- Los datos persisten aunque cierres el navegador
- Se pierden si limpias el cache/cookies

## 🔑 Datos de Prueba Predefinidos

Puedes usar estas credenciales de prueba después de registrarte:

```
Correo: prueba@gmail.com
Contraseña: 123456
```

## ⚙️ Comandos Útiles para Desarrollo

### Abrir DevTools
- **Chrome/Firefox**: F12 o Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
- **Safari**: Cmd+Option+I
- **Edge**: F12

### Ver localStorage en DevTools
1. Abre DevTools
2. Vay a "Application" o "Storage"
3. Click en "Local Storage"
4. Verás los datos almacenados:
   - `users`: Lista de usuarios registrados
   - `currentUser`: Usuario actualmente conectado
   - `appointments`: Todas las citas

### Limpiar Datos
```javascript
// En la consola de DevTools:
localStorage.clear(); // Elimina todos los datos
localStorage.removeItem('users'); // Elimina solo usuarios
```

## 🐛 Solución de Problemas

### "El archivo no se abre"
- Asegúrate de descargar todos los archivos
- Intenta abrir con doble clic si es HTML

### "Dice que el correo ya está registrado"
- localStorage recuerda tu cuenta anterior
- Limpia localStorage: `localStorage.clear()` en DevTools
- O usa un correo diferente

### "Perdí mis citas"
- Si limpias el cache/cookies, se pierden los datos
- localStorage solo persiste en su navegador
- Para datos permanentes necesitarías un servidor

### "Los horarios no se guardan"
- Verifica que la hora de recogida sea posterior a la de entrega
- Revisa la consola de DevTools para errores

## 📚 Recursos Útiles

### Documentación
- [MDN: localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [MDN: JavaScript Moderno](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [HTML5: Date Input](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input/datetime-local)

### Herramientas Recomendadas
- [VS Code](https://code.visualstudio.com/) - Editor de código
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritik307.chrome-extension-web-server) - Extensión para VS Code
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - Debugging

## 🎯 Próximos Pasos

Después de probar la aplicación, puedes:

1. **Modificar el diseño**
   - Cambia los colores en el CSS
   - Ajusta las fuentes y tamaños
   - Personaliza según tus gustos

2. **Agregar nuevas funciones**
   - Exportar citas a PDF
   - Sistema de notificaciones
   - Búsqueda y filtros
   - Historial de citas pasadas

3. **Mejorar la seguridad**
   - Implementar backend real
   - Usar JWT para autenticación
   - Encriptar contraseñas

4. **Crear versión móvil**
   - PWA (Progressive Web App)
   - React Native
   - Flutter

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar esto en producción?**
R: No, es solo para aprender y prototipar. Para producción necesitas un servidor backend.

**P: ¿Dónde puedo desplegar esto?**
R: Puedes usar GitHub Pages, Netlify, Vercel o cualquier hosting estático.

**P: ¿Cómo agrego mi logo?**
R: Reemplaza el emoji 🐾 en el HTML con una imagen: `<img src="logo.png" alt="Logo">`

**P: ¿Puedo usar en móvil?**
R: Sí, la app es completamente responsiva y funciona en cualquier navegador.

---

¡Ahora estás listo para usar Pet Appointments Manager! 🚀

Cualquier duda, abre un Issue en GitHub.
