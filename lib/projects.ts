export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  tags: string[];
  image: string;

  // Detailed content for the modal
  description?: string;
  date?: string;
  role?: string;
  company?: string;

  problem?: {
    title: string;
    points: { title: string; description: string }[];
  };

  solution?: {
    title: string;
    points: { title: string; description: string }[];
  };

  marketAnalysis?: {
    title: string;
    points: { title: string; description: string }[];
  };

  result?: {
    title: string;
    points: { title: string; description: string }[];
  };

  gallery?: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Reda CRM",
    subtitle: "Custom CRM Platform",
    tags: ["Flutter", "Firebase", "n8n"],
    image: "/assets/reda-crm-main.webp",
    description: "Este estudio de caso describe el desarrollo de una plataforma CRM personalizada para Reda, una empresa de tecnología inmobiliaria centrada en la gestión de prospectos y citas. El proyecto implicó la construcción de aplicaciones móviles y web multiplataforma utilizando Flutter, integrando Firebase para datos en tiempo real y automatizando flujos de trabajo a través de n8n. El resultado fue una herramienta completamente adaptada que optimizó las operaciones internas y mejoró la interacción entre agentes y clientes.",
    date: "Enero, 2021",
    role: "Desarrollador Flutter e Ingeniero Frontend",
    company: "Reda",
    problem: {
      title: "Problema",
      points: [
        { title: "Herramientas Desconectadas", description: "Los equipos internos dependían de herramientas dispersas y procesos manuales para gestionar leads, citas y perfiles de clientes." },
        { title: "Falta de Datos en Tiempo Real", description: "No había una plataforma centralizada para sincronizar las interacciones con los clientes o proporcionar actualizaciones en vivo a los agentes en el campo." },
        { title: "Flujo de Trabajo Ineficiente", description: "La ausencia de automatización provocó retrasos en el seguimiento de leads, programación de citas y manejo de notificaciones." },
        { title: "Escalar con Consistencia", description: "A medida que la empresa creció, mantener una comunicación constante entre agentes y clientes, así como un flujo operativo, se volvió cada vez más difícil." }
      ]
    },
    solution: {
      title: "Solución",
      points: [
        { title: "Desarrollo de Aplicaciones Multiplataforma", description: "Desarrollada una aplicación CRM móvil y web utilizando Flutter para centralizar el seguimiento de leads, la programación de citas y las interacciones entre agentes y clientes." },
        { title: "Integración de Datos en Tiempo Real", description: "Implementado Firebase para actualizaciones en vivo, sincronización de datos en tiempo real y autenticación de usuarios sin problemas en múltiples plataformas." },
        { title: "Automatización de Flujos de Trabajo", description: "Conectada la lógica del backend con n8n para automatizar las asignaciones de leads, seguimientos y notificaciones dentro de la aplicación, reduciendo tareas manuales y retrasos." },
        { title: "Arquitectura Frontend Escalable", description: "Diseñada una interfaz de usuario modular que se adapta a diferentes roles de usuario (agentes, administradores, gerentes de perfiles), con un enfoque en la claridad, la capacidad de respuesta y la rapidez." }
      ]
    },
    marketAnalysis: {
      title: "Análisis de Mercado",
      points: [
        { title: "Usuarios Objetivo", description: "Agentes inmobiliarios y equipos de perfilación que necesitan una herramienta centralizada para gestionar leads, programar citas y optimizar el seguimiento de manera eficiente." },
        { title: "Panorama Competitivo", description: "La mayoría de los CRMs en el sector inmobiliario eran demasiado complejos o demasiado genéricos, careciendo de la personalización y agilidad que Reda necesitaba para sus operaciones internas." },
        { title: "Tendencias Tecnológicas", description: "El aumento en la adopción de bases de datos en tiempo real, soluciones móviles y plataformas de automatización como n8n destacó la oportunidad de construir un sistema ligero y escalable adaptado al flujo de trabajo de Reda." }
      ]
    },
    result: {
      title: "Resultado",
      points: [
        { title: "Eficiencia Operativa", description: "La distribución de leads y los procesos de seguimiento automatizados redujeron la carga de trabajo manual, ahorrando tiempo y minimizando errores humanos." },
        { title: "Mejora del Desempeño de los Agentes", description: "Las actualizaciones en tiempo real y los datos centralizados permitieron a los agentes responder más rápido y gestionar las citas de manera más efectiva." },
        { title: "Comunicación Interna Más Fuerte", description: "La plataforma unificada simplificó la coordinación entre los equipos de perfilado y los agentes de campo, mejorando la consistencia y la responsabilidad." },
        { title: "Infraestructura Escalable", description: "La arquitectura modular y las herramientas de automatización permitieron a Reda escalar sus operaciones sin sacrificar control ni velocidad." }
      ]
    },
    gallery: [
      "/assets/reda-crm-gallery-1.webp",
      "/assets/reda-crm-gallery-2.webp",
      "/assets/reda-crm-gallery-3.webp"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.reda.crm&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/mx/app/reda-crm/id6483539128"
  },
  {
    id: 2,
    title: "Gebesa Accend App",
    subtitle: "App Control Bluetooth",
    tags: ["Flutter", "Bluetooth BLE", "IoT"],
    image: "/assets/gebesa-main.webp",
    description: "Desarrollé una aplicación móvil multiplataforma para Gebesa para controlar escritorios inteligentes a través de Bluetooth. La aplicación permite a los usuarios ajustar la altura, guardar posiciones de memoria y sincronizar en tiempo real entre iOS y Android.",
    date: "2024 - 2025",
    role: "Desarrollador Flutter – UI/UX móvil e integración Bluetooth",
    company: "Gebesa",
    problem: {
      title: "Problema",
      points: [
        { title: "Experiencia de Usuario Limitada", description: "Los escritorios inteligentes de Gebesa ofrecían funcionalidad avanzada, pero carecían de una interfaz digital para que los usuarios interactuaran con ellos. Los clientes estaban limitados a controles físicos manuales, lo que hacía que ajustar la altura del escritorio, guardar preferencias y gestionar su espacio de trabajo se sintiera anticuado y poco intuitivo. Sin una solución móvil, la experiencia del usuario no coincidía con la naturaleza innovadora del producto." }
      ]
    },
    solution: {
      title: "Solución",
      points: [
        { title: "Desarrollo de Aplicaciones Bluetooth", description: "Construí una aplicación móvil en Flutter con integración BLE para comunicarme directamente con el hardware de escritorio." },
        { title: "Experiencia Multiplataforma", description: "Desarrollé una interfaz de usuario consistente y receptiva tanto para iOS como para Android utilizando una base de código compartida y paquetes BLE nativos." },
        { title: "Controles Personalizados y Posiciones de Memoria", description: "Implementé una interfaz de usuario para ajustar la altura manualmente o guardar/cargar posiciones de memoria." },
        { title: "Integración con Firebase", description: "Usé Firebase para notificaciones push, análisis y escalabilidad futura." }
      ]
    },
    marketAnalysis: {
      title: "Análisis de Mercado",
      points: [
        { title: "Integración Móvil", description: "Pocos competidores ofrecen una integración móvil completa a nivel del consumidor." },
        { title: "Primer Jugador", description: "Gebesa quería una ventaja de primer jugador con escritorios inteligentes en LATAM." },
        { title: "Tendencia de Mercado", description: "Demanda creciente de muebles ergonómicos y inteligentes en espacios de trabajo híbridos." }
      ]
    },
    result: {
      title: "Resultado",
      points: [
        { title: "Mejor experiencia del usuario", description: "Los usuarios ahora pueden controlar sus escritorios de forma remota y guardar preferencias de altura." },
        { title: "Tiempo de configuración más rápido", description: "El proceso de emparejamiento BLE se ha simplificado en todos los modelos." },
        { title: "Aumento del valor del producto", description: "La aplicación añadió una capa tecnológica que diferencia a Gebesa de los competidores tradicionales." },
        { title: "Arquitectura a prueba de futuro", description: "La aplicación fue diseñada para actualizaciones fáciles y expansión a nuevos modelos de escritorios o características." }
      ]
    },
    gallery: [
      "/assets/gebesa-gallery-1.webp",
      "/assets/gebesa-gallery-2.webp",
      "/assets/gebesa-gallery-3.webp"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.gebesa.controller&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/mx/app/gebesa-ia/id6739783672"
  },
  {
    id: 3,
    title: "Agente Simpatía",
    subtitle: "Atención Ciudadana IA",
    tags: ["n8n", "AI Agents", "WhatsApp"],
    image: "/assets/n8n_agentes_simpatia.webp",
    description: "Desarrollé un sistema multi-agente en n8n para el Gobierno de Gómez Palacio, Durango. El agente 'La Vaquerita' atiende a ciudadanos vía WhatsApp, gestiona tickets de servicios públicos, agenda citas y canaliza solicitudes a las direcciones correspondientes de forma automatizada.",
    date: "2025",
    role: "Desarrollador n8n – Arquitectura de agentes IA e integraciones",
    company: "Simpatía / Gobierno de Gómez Palacio",
    problem: {
      title: "Problema",
      points: [
        { title: "Saturación y Falta de Seguimiento", description: "El gobierno municipal de Gómez Palacio recibía cientos de solicitudes diarias de ciudadanos a través de WhatsApp: reportes de baches, fugas de agua, consultas de trámites, solicitudes de citas y más. El personal humano no podía atender el volumen de mensajes de manera oportuna, lo que generaba tiempos de respuesta largos, ciudadanos frustrados y solicitudes perdidas. No existía un sistema centralizado para dar seguimiento a las peticiones ni para canalizar automáticamente los casos a las direcciones correctas." }
      ]
    },
    solution: {
      title: "Solución",
      points: [
        { title: "Arquitectura Multi-Agente con IA", description: "Diseñé un sistema de 4 agentes especializados que trabajan en conjunto: un agente maestro que orquesta la conversación, un subagente de dudas para información general, un subagente de citas para agendar visitas, un subagente de tickets para registrar incidencias y un subagente de canalización para derivar casos a otras direcciones." },
        { title: "Integración WhatsApp + Procesamiento Multimodal", description: "El sistema recibe mensajes de texto, audio e imágenes. Los audios se transcriben automáticamente con OpenAI Whisper, permitiendo que los ciudadanos reporten problemas hablando naturalmente." },
        { title: "Memoria Conversacional Persistente", description: "Implementé memoria de chat con PostgreSQL para mantener el contexto de conversaciones largas. El agente recuerda interacciones previas y puede retomar casos pendientes." },
        { title: "Sistema de Tickets Inteligente", description: "Cada reporte genera un ticket con clasificación automática (servicio, trámite, incidencia o queja), validación de duplicados y asignación a la dirección correspondiente." },
        { title: "Gestión de Citas en Tiempo Real", description: "El subagente de citas consulta disponibilidad real, valida horarios y confirma citas automáticamente, todo sin intervención humana." }
      ]
    },
    result: {
      title: "Resultado",
      points: [
        { title: "Atención 24/7", description: "Los ciudadanos reciben respuesta inmediata cualquier día y hora, sin depender de horarios de oficina." },
        { title: "Reducción de carga operativa", description: "El personal humano solo interviene en casos complejos que el agente escala automáticamente." },
        { title: "Trazabilidad completa", description: "Cada solicitud queda registrada con ticket, permitiendo seguimiento y métricas de atención." },
        { title: "Canalización inteligente", description: "Las solicitudes llegan directamente a la dirección correcta (Obras Públicas, Agua, Catastro, etc.) sin pasos intermedios." },
        { title: "Experiencia ciudadana mejorada", description: "El tono amigable y la rapidez de respuesta generan una percepción positiva del gobierno municipal." },
        { title: "Escalabilidad", description: "El sistema puede manejar picos de demanda sin degradar el servicio, gracias al manejo de colas con Redis." }
      ]
    }
  },
  {
    id: 4,
    title: "Agentes Reda",
    subtitle: "Ventas Inmobiliarias IA",
    tags: ["n8n", "AI Sales", "WhatsApp"],
    image: "/assets/n8n_agentes_reda.webp",
    description: "Desarrollé un sistema de agentes inteligentes en n8n para Reda. El sistema automatiza la atención de prospectos vía WhatsApp, perfilando sus necesidades, recomendando propiedades y agendando citas con asesores humanos.",
    date: "2025",
    role: "Desarrollador n8n – Arquitectura de agentes IA e integraciones",
    company: "Reda",
    problem: {
      title: "Problema",
      points: [
        { title: "Pérdida de Oportunidades y Leads sin Perfilar", description: "Reda genera cientos de prospectos inmobiliarios diariamente a través de campañas en redes sociales y su página web. Los asesores humanos no podían responder de inmediato a todos los mensajes de WhatsApp, perdiendo oportunidades de venta en los primeros minutos críticos. Además, muchos prospectos llegaban sin perfilar, lo que hacía que los asesores invirtieran tiempo en personas que no calificaban o no tenían claridad sobre lo que buscaban. Se necesitaba un sistema que respondiera al instante, calificara prospectos y solo escalara los casos listos para cerrar." }
      ]
    },
    solution: {
      title: "Solución",
      points: [
        { title: "Agente de Ventas Conversacional", description: "Diseñé un agente de IA que actúa como asesor de ventas personalizado. El nombre del asesor es dinámico según el proyecto, creando una experiencia de marca consistente. El agente mantiene un tono amigable y profesional, evitando modismos excesivos pero usando emojis para humanizar la conversación." },
        { title: "Perfilamiento Inteligente de Prospectos", description: "El sistema identifica la necesidad real del prospecto a través de preguntas naturales: qué busca, para qué lo necesita, cuántas recámaras, presupuesto aproximado, zona de preferencia y urgencia de compra. Toda esta información se captura sin que el prospecto sienta que está llenando un formulario." },
        { title: "Recomendación de Propiedades con Match", description: "Con base en el perfil capturado, el agente consulta el inventario disponible y recomienda hasta 3 unidades específicas (lote, modelo, proyecto) con un porcentaje de compatibilidad. Solo muestra opciones que realmente existen en el inventario actualizado." },
        { title: "Procesamiento Multimodal", description: "El sistema acepta mensajes de texto, audios e imágenes. Los audios se transcriben automáticamente, permitiendo que los prospectos hablen naturalmente sobre lo que buscan sin tener que escribir." },
        { title: "Memoria Conversacional", description: "Cada conversación mantiene contexto completo con PostgreSQL. Si un prospecto regresa días después, el agente recuerda su perfil, preferencias y en qué punto quedó la conversación." },
        { title: "Gestión de Citas Automatizada", description: "Cuando el prospecto está listo, el agente verifica disponibilidad real de horarios y agenda la cita directamente, notificando al asesor humano asignado." },
        { title: "Sistema de Concurrencia", description: "Implementé manejo de múltiples mensajes simultáneos con Redis, procesando conversaciones en orden y evitando respuestas duplicadas cuando el prospecto envía varios mensajes seguidos." }
      ]
    },
    result: {
      title: "Resultado",
      points: [
        { title: "Respuesta instantánea 24/7", description: "Los prospectos reciben atención inmediata sin importar el horario, capturando el interés en el momento de mayor intención." },
        { title: "Prospectos pre-calificados", description: "Los asesores humanos solo reciben prospectos ya perfilados con información de necesidades, presupuesto y preferencias." },
        { title: "Mayor conversión", description: "Al recomendar propiedades específicas con alto match, los prospectos llegan a las citas con opciones concretas que les interesan." },
        { title: "Reactivación de bases frías", description: "El sistema puede contactar bases de datos antiguas y re-perfilar prospectos que no se cerraron anteriormente." },
        { title: "Escalabilidad sin perder personalización", description: "El agente mantiene conversaciones naturales y personalizadas aunque atienda cientos de prospectos simultáneamente." },
        { title: "Reducción de carga operativa", description: "Los asesores se enfocan en cerrar ventas en lugar de responder preguntas básicas o perfilar desde cero." }
      ]
    }
  },
  {
    id: 5,
    title: "Simpatía CRM",
    subtitle: "Gestión de Atención Ciudadana",
    tags: ["React", "WhatsApp API", "PostgreSQL"],
    image: "/assets/simpatia-crm-gallery-1.png",
    description: "Desarrollé un sistema CRM para el Gobierno de Gómez Palacio, Durango, que centraliza la gestión de solicitudes ciudadanas. El sistema recibe y administra tickets generados automáticamente por el agente de IA, asignándolos a las direcciones municipales correspondientes como SIDEAPA, Arte y Cultura, DIF, Obras Públicas y más.",
    date: "2025",
    role: "Desarrollador Full Stack – CRM e integraciones",
    company: "Simpatía / Gobierno de Gómez Palacio",
    problem: {
      title: "Problema",
      points: [
        { title: "Desorganización de Solicitudes", description: "El gobierno municipal recibía cientos de tickets generados por el agente de IA 'La Vaquerita', pero no existía un sistema centralizado para administrarlos, asignarlos y darles seguimiento. Los tickets se acumulaban sin clasificación clara y no había forma de saber qué dirección debía atender cada caso." },
        { title: "Falta de Visibilidad y Control", description: "Las diferentes direcciones municipales (SIDEAPA, DIF, Arte y Cultura, etc.) no tenían visibilidad sobre los reportes asignados a ellas. No había métricas de atención, tiempos de respuesta ni historial de gestión." },
        { title: "Comunicación Fragmentada", description: "Los funcionarios necesitaban comunicarse con los ciudadanos para dar seguimiento, pero no existía un canal integrado que mantuviera el contexto de la conversación original iniciada por el agente de IA." },
        { title: "Ausencia de Trazabilidad", description: "No se podía rastrear el ciclo completo de una solicitud: desde su creación por el agente de IA, pasando por la asignación a una dirección, hasta su resolución final." }
      ]
    },
    solution: {
      title: "Solución",
      points: [
        { title: "CRM Centralizado Multi-Direccional", description: "Construí un sistema web que recibe automáticamente todos los tickets generados por el agente de IA y los organiza en un dashboard central. Cada dirección municipal tiene acceso a sus tickets asignados con filtros por estado, prioridad y tipo de solicitud." },
        { title: "Sistema de Asignación Inteligente", description: "Implementé lógica de clasificación automática que asigna cada ticket a la dirección correspondiente según el tipo de reporte: fugas de agua a SIDEAPA, solicitudes de apoyo social al DIF, eventos culturales a Arte y Cultura, baches a Obras Públicas, etc." },
        { title: "Integración WhatsApp para Seguimiento", description: "El CRM permite a los funcionarios responder directamente desde la plataforma, manteniendo la conversación en el mismo hilo de WhatsApp donde el ciudadano inició el reporte con el agente de IA. Esto asegura continuidad y contexto completo." },
        { title: "Panel de Control y Métricas", description: "Desarrollé dashboards personalizados para cada dirección con métricas de atención: tickets pendientes, resueltos, tiempos promedio de respuesta y tendencias de solicitudes." },
        { title: "Gestión de Estados y Prioridades", description: "Los funcionarios pueden actualizar el estado de cada ticket (nuevo, en proceso, resuelto, cancelado) y asignar niveles de prioridad. El sistema envía notificaciones automáticas cuando un ticket requiere atención urgente." },
        { title: "Base de Datos PostgreSQL con Historial Completo", description: "Toda la información de tickets, conversaciones, asignaciones y resoluciones queda almacenada de forma estructurada, permitiendo auditorías, reportes históricos y análisis de tendencias." }
      ]
    },
    result: {
      title: "Resultado",
      points: [
        { title: "Centralización y Organización", description: "Todas las solicitudes ciudadanas fluyen automáticamente desde el agente de IA al CRM, eliminando puntos ciegos y pérdida de información." },
        { title: "Asignación Automática y Eficiente", description: "Cada dirección municipal recibe únicamente los tickets de su competencia, reduciendo confusión y acelerando tiempos de atención." },
        { title: "Trazabilidad Completa", description: "Desde la creación del ticket por la IA hasta su cierre, todo el ciclo queda documentado con timestamps, responsables y acciones realizadas." },
        { title: "Mejora en Tiempos de Respuesta", description: "Los funcionarios pueden priorizar casos urgentes y responder directamente desde el CRM sin cambiar de plataforma, acelerando la atención ciudadana." },
        { title: "Métricas y Rendición de Cuentas", description: "Las direcciones municipales tienen visibilidad clara de su desempeño con indicadores cuantitativos de eficiencia en atención ciudadana." },
        { title: "Escalabilidad y Extensibilidad", description: "El sistema puede integrarse con nuevos canales de comunicación, agregar más direcciones municipales o ampliar funcionalidades según las necesidades del gobierno." }
      ]
    },
    gallery: [
      "/assets/simpatia-crm-gallery-2.png",
      "/assets/simpatia-crm-gallery-3.png"
    ]
  }
];
