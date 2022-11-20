const services_data = () => {
  return [
    /*{
            description: "La Borne Numérique",
            img: null,
            url: "https://radiodirectimpact.com"
        },*/
    {
      description: "Incidents & demandes",
      image: require("../assets/headset.png"),
      path: "/incidents-demandes",
      url: "https://impactsupport.freshservice.com/support/tickets/new",
    },
    {
      description: "Solutions et divers questions",
      image: require("../assets/info.png"),
      path: "/solutions-faq",
      url: "https://impactsupport.freshservice.com/support/solutions",
    },
    {
      description: "Demande de financement",
      image: require("../assets/save-money.png"),
      path: "/financement",
      url: "https://submit.jotformeu.com/210106326474346",
    },
    {
      description: "Demande de salle Zoom",
      image: require("../assets/meeting.png"),
      path: "/demande-salle-zoom",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScAvrQGqIV5tioo5wH6BZti0eNPmohgkXYJuX-FCuZjX0kZfA/viewform",
    },
    {
      description: "Soins pastoraux",
      image: require("../assets/prayer.png"),
      path: "/soins-pastoraux",
      url: "https://impactcentrechretien.elvanto.eu/form/7deee540-c3d1-4ef6-a858-6aafda9dbb87/",
    },
    {
      description: "Podcasts ICC Bruxelles",
      image: require("../assets/podcast.png"),
      path: "/podcasts-icc-bruxelles",
      url: "https://impactsupport.freshservice.com/support/solutions/folders/5000094705",
    },
    {
      description: "Radio Direct Impact",
      image: require("../assets/microphone.png"),
      path: "/radio-direct-Impact",
      url: "https://radiodirectimpact.com",
    },
    {
      description: "Plateforme de Mariage",
      image: require("../assets/rings.png"),
      path: "/plateform-mariages",
      url: "https://mariages.impactcentrechretien.be/",
    },
    {
      description: "Procédure et coordination de Mariages",
      image: require("../assets/folder.png"),
      path: "/coordination-mariages",
      url: "https://impactsupport.freshservice.com/a/solutions/articles/5000042105",
    },
    {
      description: "IT Academy",
      image: [
        require("../assets/instagram.png"),
        require("../assets/facebook.png"),
        require("../assets/youtube.png"),
      ],
      path: "/it-academy",
      url: "https://www.iccitacademy.com/",
    },
    {
      description: "Demande de réalisation des travaux (MCP)",
      image: require("../assets/done.png"),
      path: "/mcp",
      url: "https://com.impactcentrechretien.be",
    },
    {
      description: "Candidature pour devenir STAR",
      image: require("../assets/teamwork.png"),
      path: "/candidature-devenir-star",
      url: "https://impactcentrechretien.elvanto.eu/form/17e553e3-d8f0-4258-abec-ebc9f72539fc",
    },
    {
      description: "Compte bancaire ICC Bruxelles",
      image: require("../assets/credit-card.png"),
      path: "/compte-bancaire",
      url: "https://impactsupport.freshservice.com/a/solutions/articles/5000053678",
    },
    {
      description: "SPM (Service Prêt Matériel)",
      image: require("../assets/laptop.png"),
      path: "/spm",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdh8rhVKp6oF1MGrV0tpmeb3NDzrM_PRe_QpkEgD_AcVMGvEg/viewform",
    },
  ];
};

export default services_data;
