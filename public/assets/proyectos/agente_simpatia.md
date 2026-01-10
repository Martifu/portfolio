Agente Simpatía: Automatización de Atención Ciudadana con IA
Desarrollé un sistema multi-agente en n8n para el Gobierno de Gómez Palacio, Durango. El agente "La Vaquerita" atiende a ciudadanos vía WhatsApp, gestiona tickets de servicios públicos, agenda citas y canaliza solicitudes a las direcciones correspondientes de forma automatizada.

assets/n8n_agentes_simpatia.png

Fecha                   2024
-----------------------------------------
Rol                     Desarrollador n8n – Arquitectura de agentes IA e integraciones
-----------------------------------------

Empresa                 Simpatía / Gobierno de Gómez Palacio
-----------------------------------------

Problema
El gobierno municipal de Gómez Palacio recibía cientos de solicitudes diarias de ciudadanos a través de WhatsApp: reportes de baches, fugas de agua, consultas de trámites, solicitudes de citas y más. El personal humano no podía atender el volumen de mensajes de manera oportuna, lo que generaba tiempos de respuesta largos, ciudadanos frustrados y solicitudes perdidas. No existía un sistema centralizado para dar seguimiento a las peticiones ni para canalizar automáticamente los casos a las direcciones correctas.

Solución
Arquitectura Multi-Agente con IA
Diseñé un sistema de 4 agentes especializados que trabajan en conjunto: un agente maestro que orquesta la conversación, un subagente de dudas para información general, un subagente de citas para agendar visitas, un subagente de tickets para registrar incidencias y un subagente de canalización para derivar casos a otras direcciones.

Integración WhatsApp + Procesamiento Multimodal
El sistema recibe mensajes de texto, audio e imágenes. Los audios se transcriben automáticamente con OpenAI Whisper, permitiendo que los ciudadanos reporten problemas hablando naturalmente.

Memoria Conversacional Persistente
Implementé memoria de chat con PostgreSQL para mantener el contexto de conversaciones largas. El agente recuerda interacciones previas y puede retomar casos pendientes.

Sistema de Tickets Inteligente
Cada reporte genera un ticket con clasificación automática (servicio, trámite, incidencia o queja), validación de duplicados y asignación a la dirección correspondiente.

Gestión de Citas en Tiempo Real
El subagente de citas consulta disponibilidad real, valida horarios y confirma citas automáticamente, todo sin intervención humana.

Resultado
Atención 24/7: Los ciudadanos reciben respuesta inmediata cualquier día y hora, sin depender de horarios de oficina.

Reducción de carga operativa: El personal humano solo interviene en casos complejos que el agente escala automáticamente.

Trazabilidad completa: Cada solicitud queda registrada con ticket, permitiendo seguimiento y métricas de atención.

Canalización inteligente: Las solicitudes llegan directamente a la dirección correcta (Obras Públicas, Agua, Catastro, etc.) sin pasos intermedios.

Experiencia ciudadana mejorada: El tono amigable y la rapidez de respuesta generan una percepción positiva del gobierno municipal.

Escalabilidad: El sistema puede manejar picos de demanda sin degradar el servicio, gracias al manejo de colas con Redis.