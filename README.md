# ParcialWebRepo2

Frontend Angular simple para gestionar torneos.

## Funciones

- Formulario para crear torneos.
- Tabla para listar torneos.
- Consumo del backend en `http://localhost:8080/api/torneos`.

No incluye formulario ni tabla para `Equipo`.

## Pruebas y evidencias

En esta seccion se pueden anexar capturas de las pruebas solicitadas.

### Base de datos y relacion

<img width="381" height="591" alt="image" src="https://github.com/user-attachments/assets/eb40ac07-a05c-4eff-9c14-43e4d553b716" />

### Formulario de insercion y tabla de consulta

La siguiente captura muestra:

- Formulario Angular para registrar torneos.
- Tabla de torneos registrados.
- Datos consultados desde el backend.
- Estado de conexion `API conectada`.

![Formulario y tabla de torneos](evidencias/frontend-angular-torneos.png)

### Formulario funcionando

<img width="1029" height="452" alt="image" src="https://github.com/user-attachments/assets/66809787-308d-49e3-8ec5-023a2b622296" />

### Endpoint usado por el formulario

```text
POST http://localhost:8080/api/torneos
```

### Endpoint usado por la tabla

```text
GET http://localhost:8080/api/torneos
```

<img width="290" height="410" alt="image" src="https://github.com/user-attachments/assets/3f4e0f27-6ff4-479c-99f3-fcae7c8a727e" />
