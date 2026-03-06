---
title: Auth Spring Boot Starter
description: Un Spring Boot Starter listo para producción que proporciona autenticación y autorización completas desde el primer momento.
navigation.icon: uil:bolt
---

::u-page-hero
#title
Auth Spring Boot Starter

#description
Un Spring Boot Starter listo para producción que proporciona autenticación y autorización completas desde el primer momento.

Integra sin problemas autenticación JWT, registro de usuarios, verificación multicanal y gestión de roles en tus aplicaciones Spring Boot.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /es/getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Comenzar
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-github
  size: xl
  to: https://github.com/ctlabs-dev/auth-spring-boot-starter
  variant: outline
  ---
  Ver en GitHub
  :::
::

::u-page-section
#title
Características Principales

#features
  :::u-page-feature
  ---
  icon: i-heroicons-lock-closed
  ---
  #title
  Sesiones Seguras (JWT)

  #description
  Estrategia de token dual (Acceso/Renovación) con revocación automática y tokens compuestos para máxima seguridad.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-user-plus
  ---
  #title
  Seguridad Granular (RBAC)

  #description
  Esquema completo de Roles y Permisos inyectado dinámicamente en el contexto de Spring Security.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-language
  ---
  #title
  Bilingüe por Diseño

  #description
  Soporte nativo para notificaciones y validaciones en múltiples idiomas desde el inicio.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-device-phone-mobile
  ---
  #title
  Notificaciones Inteligentes

  #description
  Soporte multi-proveedor para Email, SMS y WhatsApp usando SMTP, Twilio y Brevo sin complicaciones.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-code-bracket
  ---
  #title
  Amigable para Desarrolladores

  #description
  Extensible mediante Spring Events y metadatos JSONB para perfiles personalizados sin migraciones de BD.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-circle-stack
  ---
  #title
  Admin Sin Configuración

  #description
  Creación automática de usuario admin inicial con permisos granulares en la primera ejecución.
  :::
::

::u-page-section
#title
Arquitectura y Diseño

#description
Construido siguiendo los principios de Autoconfiguración de Spring Boot y el modelo Diátaxis para integración invisible y documentación clara.

#features
  :::u-page-feature
  ---
  icon: i-heroicons-shield-check
  ---
  #title
  Separación de Responsabilidades

  #description
  Servicios dedicados: `AuthService` para autogestión y `UserManagementService` para administración privilegiada.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-swatch
  ---
  #title
  Plantillas Personalizadas

  #description
  Sobrescribe fácilmente los diseños de email predeterminados usando plantillas Thymeleaf en tu propio proyecto.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-server
  ---
  #title
  Aislamiento de Base de Datos

  #description
  Esquema de BD automatizado y aislado con su propia tabla de historial para evitar conflictos en tu proyecto.
  :::
::

