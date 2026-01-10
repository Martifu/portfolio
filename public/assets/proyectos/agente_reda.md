Agentes Reda: Sistema de Ventas Inmobiliarias con IA por WhatsApp
Desarrollé un sistema de agentes inteligentes en n8n para Reda. El sistema automatiza la atención de prospectos vía WhatsApp, perfilando sus necesidades, recomendando propiedades y agendando citas con asesores humanos.

assets/n8n_agentes_reda.png

Fecha                   2024
-----------------------------------------
Rol                     Desarrollador n8n – Arquitectura de agentes IA e integraciones
-----------------------------------------

Empresa                 Reda
-----------------------------------------

Problema
Reda genera cientos de prospectos inmobiliarios diariamente a través de campañas en redes sociales y su página web. Los asesores humanos no podían responder de inmediato a todos los mensajes de WhatsApp, perdiendo oportunidades de venta en los primeros minutos críticos. Además, muchos prospectos llegaban sin perfilar, lo que hacía que los asesores invirtieran tiempo en personas que no calificaban o no tenían claridad sobre lo que buscaban. Se necesitaba un sistema que respondiera al instante, calificara prospectos y solo escalara los casos listos para cerrar.

Solución
Agente de Ventas Conversacional
Diseñé un agente de IA que actúa como asesor de ventas personalizado. El nombre del asesor es dinámico según el proyecto, creando una experiencia de marca consistente. El agente mantiene un tono amigable y profesional, evitando modismos excesivos pero usando emojis para humanizar la conversación.

Perfilamiento Inteligente de Prospectos
El sistema identifica la necesidad real del prospecto a través de preguntas naturales: qué busca, para qué lo necesita, cuántas recámaras, presupuesto aproximado, zona de preferencia y urgencia de compra. Toda esta información se captura sin que el prospecto sienta que está llenando un formulario.

Recomendación de Propiedades con Match
Con base en el perfil capturado, el agente consulta el inventario disponible y recomienda hasta 3 unidades específicas (lote, modelo, proyecto) con un porcentaje de compatibilidad. Solo muestra opciones que realmente existen en el inventario actualizado.

Procesamiento Multimodal
El sistema acepta mensajes de texto, audios e imágenes. Los audios se transcriben automáticamente, permitiendo que los prospectos hablen naturalmente sobre lo que buscan sin tener que escribir.

Memoria Conversacional
Cada conversación mantiene contexto completo con PostgreSQL. Si un prospecto regresa días después, el agente recuerda su perfil, preferencias y en qué punto quedó la conversación.

Gestión de Citas Automatizada
Cuando el prospecto está listo, el agente verifica disponibilidad real de horarios y agenda la cita directamente, notificando al asesor humano asignado.

Sistema de Concurrencia
Implementé manejo de múltiples mensajes simultáneos con Redis, procesando conversaciones en orden y evitando respuestas duplicadas cuando el prospecto envía varios mensajes seguidos.

Resultado
Respuesta instantánea 24/7: Los prospectos reciben atención inmediata sin importar el horario, capturando el interés en el momento de mayor intención.

Prospectos pre-calificados: Los asesores humanos solo reciben prospectos ya perfilados con información de necesidades, presupuesto y preferencias.

Mayor conversión: Al recomendar propiedades específicas con alto match, los prospectos llegan a las citas con opciones concretas que les interesan.

Reactivación de bases frías: El sistema puede contactar bases de datos antiguas y re-perfilar prospectos que no se cerraron anteriormente.

Escalabilidad sin perder personalización: El agente mantiene conversaciones naturales y personalizadas aunque atienda cientos de prospectos simultáneamente.

Reducción de carga operativa: Los asesores se enfocan en cerrar ventas en lugar de responder preguntas básicas o perfilar desde cero.