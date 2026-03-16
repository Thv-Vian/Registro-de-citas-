# Instrucciones para Crear Repositorio en GitHub

## 📌 Pasos para Subir tu Proyecto a GitHub

### 1. Crear una Cuenta en GitHub (si no tienes)
- Ve a https://github.com
- Haz clic en "Sign up"
- Completa el formulario y verifica tu correo

### 2. Crear un Nuevo Repositorio

**Opción A: Desde la interfaz de GitHub**

1. Inicia sesión en GitHub
2. Haz clic en el ícono "+" en la esquina superior derecha
3. Selecciona "New repository"
4. Completa los detalles:
   - **Repository name**: `pet-appointments-manager`
   - **Description**: "Sistema de gestión de citas para cuidado de mascotas - Práctica de Prototipado Rápido"
   - **Public** (para que otros puedan verlo)
   - **Add a README file**: No (ya tienes uno)
   - **Add .gitignore**: No (ya tienes uno)
   - Haz clic en "Create repository"

### 3. Configurar Git Localmente

Abre tu terminal en la carpeta del proyecto:

```bash
# Navega a la carpeta del proyecto
cd "ruta/a/pet-appointments-manager"

# Inicializar repositorio git
git init

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Initial commit: Pet Appointments Manager - Rapid Prototyping Practice"

# Renombrar rama a main (si es necesario)
git branch -M main

# Agregar el repositorio remoto (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/pet-appointments-manager.git

# Subir los cambios
git push -u origin main
```

### 4. Alternativa: Copiar y Pegar los Comandos

Si eres nuevo en Git, GitHub te proporciona los comandos exactos después de crear el repositorio. Solo cópialosy pástalos en tu terminal.

## 🔑 Configurar Git (Primera Vez)

Si es la primera vez que usas Git, necesitas configurar tu identidad:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## 📝 Commits Útiles Futuros

Después de hacer cambios, usa estos comandos:

```bash
# Ver cambios
git status

# Agregar cambios específicos
git add archivo.html
git add .  # Agregar todos

# Crear commit
git commit -m "Descripción breve de los cambios"

# Subir cambios
git push origin main
```

## 🎯 Estructura Final en GitHub

Tu repositorio lucirá así:

```
pet-appointments-manager/
├── index.html              # Página principal
├── js/
│   └── app.js             # Lógica de la app
├── README.md              # Documentación principal
├── QUICK_START.md         # Guía de inicio rápido
├── GITHUB_SETUP.md        # Este archivo
├── package.json           # Metadatos del proyecto
└── .gitignore             # Archivos ignorados por git
```

## 🌐 Compartir tu Proyecto

Una vez subido, puedes:

1. **Compartir el link directo**
   ```
   https://github.com/TU_USUARIO/pet-appointments-manager
   ```

2. **Desplegar con GitHub Pages** (totalmente gratis)
   - Ve a Settings del repositorio
   - Baja a "GitHub Pages"
   - Selecciona "main" como rama
   - Tu sitio estará en: `https://TU_USUARIO.github.io/pet-appointments-manager`

3. **Usar Badge README**
   ```markdown
   [![GitHub](https://img.shields.io/badge/GitHub-Repositorio-blue)](https://github.com/tu-usuario/pet-appointments-manager)
   ```

## 🚀 Deploy Alternativo (MÁS FÁCIL)

### Opciones sin usar Git:

**Netlify Drop**
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `pet-appointments-manager`
3. ¡Listo! Tu sitio está en vivo en minutos

**GitHub Pages (sin Git)**
1. Haz click en Code en tu repositorio
2. Selecciona "Environments" en la izquierda
3. Tu sitio se desplegará automáticamente

## 📊 Badges para tu README

Puedes agregar badges a tu README:

```markdown
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub stars](https://img.shields.io/github/stars/tu-usuario/pet-appointments-manager)
![GitHub issues](https://img.shields.io/github/issues/tu-usuario/pet-appointments-manager)
```

## 🔗 Links Útiles

- [Documentación Git](https://git-scm.com/doc)
- [Documentación GitHub](https://docs.github.com)
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

## ❓ Troubleshooting

**"Permission denied (publickey)"**
```bash
# Necesitas agregar tu clave SSH
ssh-keygen -t ed25519 -C "tu@email.com"
# Luego agrega la clave en GitHub Settings → SSH Keys
```

**"fatal: not a git repository"**
```bash
# Asegúrate de estar en la carpeta correcta
cd ruta/del/proyecto
git init
```

**"Everything up-to-date"**
```bash
# No hay cambios para subir, o ya subirmos todo
# Verifica con: git status
```

---

¡Tu proyecto está listo para GitHub! 🎉

Recuerda actualizar los links en este documento con tu usuario de GitHub.
