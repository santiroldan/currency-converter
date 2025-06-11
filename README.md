# 🎯 Conversor de monedas 

Este proyecto demuestra el concepto de arquitectura hexagonal mediante un conversor de monedas. 
Utiliza Express para exponer un servicio a través de una API REST y se conecta a una API externa para obtener tasas de cambio actualizadas.

---

## 📋 Tabla de Contenidos

- [Objetivo del Proyecto](#-objetivo-del-proyecto)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Ejecutar el Proyecto](#-ejecutar-el-proyecto)
- [Ejecutar los Tests](#-ejecutar-los-tests)
- [Licencia](#-licencia)

---

## 📌 Objetivo del Proyecto
Explorar el concepto de arquitectura hexagonal mediante un conversor de monedas.

- Arquitectura hexagonal (puertos y adaptadores).
- Express para exponer el servicio mediante una API REST.
- API externa (https://api.frankfurter.app) como proveedor de tasas de cambio.
- Soporte para pruebas unitarias y e2e con [Vitest](https://vitest.dev) y [Supertest](https://github.com/visionmedia/supertest).

---

## 📦 Estructura del Proyecto

```text
currency-converter/
├── src/
│   ├── application/
│   ├── domain/
│   ├── infrastructure/
│       ├── adapters/
│       ├── http/
├── test/
    ├── application/   # Tests unitarios
    └── infrastructure/http/   # Tests de end-to-end (e2e)
```

---

## 🚀 Instalación

```bash
pnpm install
```

---

## 🚀 Ejecutar el Proyecto

```bash
pnpm start
```

---

## 🧪 Ejecutar los Tests

```bash
pnpm test
```

---

## 📝 Licencia

Este proyecto está licenciado bajo la licencia MIT.

En la raíz del repositorio encontrarás un archivo llamado `LICENSE` que contiene el texto completo de la licencia. Este archivo indica los términos bajo los cuales puedes usar, modificar y distribuir este proyecto.

La licencia MIT es muy permisiva, permitiendo el uso libre del código siempre que se mantenga el aviso de copyright y la licencia original.

No se requiere configuración adicional para usar el proyecto bajo esta licencia, simplemente respeta las condiciones indicadas en el archivo `LICENSE`.
