const services_data = () => {
  return [
    /*{
           description: "La Borne Numérique",
            img: null,
            url: "https://radiodirectimpact.com"
        },*/
    {
      description: "Incidents & demandes (DSI)",
      image: require("../assets/headset.png"),
      url: "https://impactsupport.freshservice.com/support/tickets/new",
    },
    {
      description: "Solutions et diverses informations (DSI)",
      image: require("../assets/info.png"),
      path: "/solutions-faq",
      url: "https://impactsupport.freshservice.com/support/solutions",
    },
    {
      description: "Accès à Elvanto (DSI)",
      image: require("../assets/web-design.png"),
      path: "/elvanto",
      url: "https://impactcentrechretien.elvanto.eu",
    },
    {
      description: "Adresse des GI (MGI)",
      image: require("../assets/location-mark.png"),
      path: "/gi",
      url: "https://www.google.com/maps/d/embed?mid=1J00xvOg1oOtMADQS2L-vOJds13Q5LlLI",
    },
    {
      description: "Candidature pour devenir STAR (MDS)",
      image: require("../assets/teamwork.png"),
      path: "/candidature-devenir-star",
      url: "https://impactcentrechretien.elvanto.eu/form/17e553e3-d8f0-4258-abec-ebc9f72539fc",
    },
    {
      description: "Cours de langue (MIS)",
      image: require("../assets/translation.png"),
      path: "/cours-de-langue",
      url: "https://impactcentrechretien.elvanto.eu/form/bc547b36-3951-4847-9d88-b1249475b07a",
    },
    {
      description: "Demande de financement (MFBC)",
      image: require("../assets/save-money.png"),
      path: "/financement",
      url: "https://submit.jotformeu.com/210106326474346",
    },
    {
      description: "Demande de réalisation des travaux (MCP)",
      image: require("../assets/done.png"),
      path: "/mcp",
      url: "https://com.impactcentrechretien.be",
    },
    {
      description: "Demande de salle Zoom (DSI)",
      image: require("../assets/meeting.png"),
      path: "/demande-salle-zoom",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScAvrQGqIV5tioo5wH6BZti0eNPmohgkXYJuX-FCuZjX0kZfA/viewform",
    },
    {
      description: "Fiche Évangélisation (MCDE)",
      image: require("../assets/form.png"),
      path: "/evangilisation",
      url: "https://impactcentrechretien.elvanto.eu/form/6935a79c-a4e9-4691-b7f8-31f32aa20baa",
    },
    {
      description: "Fiche de caisse (MFBC) ",
      image: require("../assets/contract.png"),
      path: "/fiche-de-caisse",
      url: "https://form.jotform.com/211714773212348",
    },
    {
      description: "Fiche Je témoigne (MDIP) ",
      image: require("../assets/voice.png"),
      path: "/jeTemoigne",
      url: "https://impactcentrechretien.elvanto.eu/form/8bef3db9-77b7-4a1c-9dbc-4f2435f4e823",
    },
    {
      description: "Formation PCNC - formulaire d'inscription R3 BX",
      image: require("../assets/form.png"),
      path: "/pcnc",
      url: "https://impactcentrechretien.elvanto.eu/form/d91ad054-677e-4bf9-a89f-6faad376342e",
    },
    {
      description: "Impact junior – pré-inscription des enfants",
      image: require("../assets/junior.png"),
      path: "/impact-junior",
      url: "https://impactcentrechretien.elvanto.eu/form/a637309d-c6c0-4a00-80d9-2b0c70c51385",
    },
    {
      description: "Impact Scolaire – Booster de réussite",
      image: require("../assets/back-to-school.png"),
      path: "/impact-scolaire",
      url: "https://impactcentrechretien.elvanto.eu/form/2f8c450b-1a17-4926-97b0-07ab7b9b880e",
    },
    {
      description: "Informations Bancaires (MFBC) ",
      image: require("../assets/credit-card.png"),
      path: "/info-bancaires",
      url: "https://impactsupport.freshservice.com/support/solutions/articles/5000053678-compte-bancaire-icc-bruxelles-je-seme-dime-offrande-",
    },
    {
      description: "IT Academy",
      image: require("../assets/work.png"),
      path: "/it-academy",
      url: "https://www.iccitacademy.com/",
    },
    {
      description: "Nurserie",
      image: require("../assets/playtime.png"),
      path: "/nurserie",
      url: "https://impactcentrechretien.elvanto.eu/form/f95b0f48-e85e-4a36-bf7c-100d9541c5b5",
    },
    {
      description: "Plateforme Jetemoigne.be ",
      image: require("../assets/voice.png"),
      path: "/jeTemoigne",
      url: "https://jetemoigne.egliseicc.be/",
    },
    {
      description: "Plateforme de Mariage (DCE) ",
      image: require("../assets/rings.png"),
      path: "/plateform-mariages",
      url: "https://mariages.impactcentrechretien.be/",
    },
    {
      description: "Podcasts ICC Bruxelles",
      image: require("../assets/podcast.png"),
      path: "/podcasts-icc-bruxelles",
      url: "https://impactsupport.freshservice.com/support/solutions/folders/5000094705",
    },
    {
      description: "Procédure et coordination de Mariages (DCE) ",
      image: require("../assets/folder.png"),
      path: "/coordination-mariages",
      url: "https://impactsupport.freshservice.com/support/solutions/articles/5000042105-proc-dure-b-n-dictions-nuptiales-interactions-avec-les-d-partements-impliqu-s",
    },
    {
      description: "Programme de la semaine",
      image: require("../assets/calendar.png"),
      path: "/programme-de-la-semaine",
      url: "https://www.youtube.com/watch?v=uFoLzkzych0",
    },
    {
      description: "Radio Direct Impact",
      image: require("../assets/microphone.png"),
      path: "/radio-direct-Impact",
      url: "https://radiodirectimpact.com",
    },

    {
      description: "Soins pastoraux",
      image: require("../assets/prayer.png"),
      path: "/soins-pastoraux",
      url: "https://impactcentrechretien.elvanto.eu/form/7deee540-c3d1-4ef6-a858-6aafda9dbb87/",
    },
    {
      description: "SPM (Service Prêt Matériel)",
      image: require("../assets/laptop.png"),
      path: "/spm",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdh8rhVKp6oF1MGrV0tpmeb3NDzrM_PRe_QpkEgD_AcVMGvEg/viewform",
    },
    {
      description: "Webmail ICC",
      image: require("../assets/email.png"),
      path: "/webmail",
      url: "http://webmail.impactcentrechretien.be",
    },
  ];
};

export default services_data;
