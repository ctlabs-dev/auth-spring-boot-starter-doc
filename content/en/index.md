---
title: Auth Spring Boot Starter
description: A production-ready Spring Boot Starter providing complete authentication and authorization out-of-the-box.
navigation.icon: uil:bolt
---

::u-page-hero
#title
Auth Spring Boot Starter

#description
A production-ready Spring Boot Starter providing complete authentication and authorization out-of-the-box.

Seamlessly integrate JWT authentication, user registration, multi-channel verification, and role management into your Spring Boot applications.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /en/getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-github
  size: xl
  to: https://github.com/ctlabs-dev/auth-spring-boot-starter
  variant: outline
  ---
  View on GitHub
  :::
::

::u-page-section
#title
Key Features

#features
  :::u-page-feature
  ---
  icon: i-heroicons-lock-closed
  ---
  #title
  Secure Sessions (JWT)

  #description
  Dual-token strategy (Access/Refresh) with automatic revocation and compound tokens for maximum security.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-user-plus
  ---
  #title
  Granular Security (RBAC)

  #description
  Complete Roles & Permissions scheme dynamically injected into the Spring Security context.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-language
  ---
  #title
  Bilingual by Design

  #description
  Native support for notifications and validations in multiple languages out-of-the-box.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-device-phone-mobile
  ---
  #title
  Smart Notifications

  #description
  Multi-provider support for Email, SMS, and WhatsApp using SMTP, Twilio, and Brevo seamlessly.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-code-bracket
  ---
  #title
  Developer Friendly

  #description
  Extensible via Spring Events and JSONB metadata for custom profiles without DB migrations.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-circle-stack
  ---
  #title
  Zero-Config Admin

  #description
  Automatic seed admin user creation with granular permissions on the first run.
  :::
::

::u-page-section
#title
Architecture & Design

#description
Built-in following Spring Boot Autoconfiguration principles and the Diátaxis model for invisible integration and clear documentation.

#features
  :::u-page-feature
  ---
  icon: i-heroicons-shield-check
  ---
  #title
  Separation of Concerns

  #description
  Dedicated services: `AuthService` for self-management and `UserManagementService` for privileged administration.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-swatch
  ---
  #title
  Custom Templates

  #description
  Easily overwrite default email designs using Thymeleaf templates in your own project.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-server
  ---
  #title
  Database Isolation

  #description
  Automated and isolated DB schema with its own history table to avoid conflicts in your project.
  :::
::
