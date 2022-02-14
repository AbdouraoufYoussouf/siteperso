import socket from '../images/socket.mp4'
import blog from '../images/blog.mp4'
import restau from '../images/restau.mp4'
import tournois from '../images/tournois.mp4'
import reactNative from '../images/reactNative.mp4'

const Data =[
    {
        "titre":"Mon blog personnel",
        "desc":"Dans mon blog ,je propose des tutoriels et des projets que j'ai pu realiser pour aider les passionneur du web comme moi et leur faciliter les taches en tant que debutant ou autres et avec django comme backend",
        "video":blog,
        "techno":[ 
            {"id":1,"nom":"React"},
            {"id":3,"nom":"Redux"},
            {"id":2,"nom":"Styled-component"},
            {"id":4,"nom":"django"},
        ]
    },
    {
        "titre":"RESTAURANT",
        "desc":" Création d’un site web de réservation et de commande en ligne avec deux interface , un interface administrateur et un interface des utilisateurs",
        "video":restau,
        "techno":[ 
            {"id":1,"nom":"PHP"},
            {"id":2,"nom":"HTML"},
            {"id":3,"nom":"CSS"},
            {"id":4,"nom":"BOOTSTRAP"},
            {"id":5,"nom":"JAVASCRIPT"}
        ]
    },
    {
        "titre":"Application web de gestion d’un tournois de Football",
        "desc":"Ce projet consite pour un admin de gérer les matchs ,les équipes ,les jours ,les stades ,les arbitres ainsi que les autres utilisateurs du site,mais en se connectant entant que user, on aura pas accées aux méthodes de modifications ,seul l'admin a accès.",
        "video":tournois,
        "techno":[ 
            {"id":1,"nom":"SpringBoot"},
            {"id":2,"nom":"SpringSecurity"},
            {"id":3,"nom":"SpringData"},
            {"id":4,"nom":"Thymeleaf"},
            {"id":5,"nom":"Bootstrap"},
            {"id":6,"nom":"MySQl"},
            {"id":7,"nom":"HTML"},
            {"id":8,"nom":"CSS"}
        ]
    },
    {
        "titre":"Application Mobile Android & IOS de trouver des places",
        "desc":"L'objectif et que chaque utilisateur cree un compte et peut ajouter des lieux comme banque ,hotel ...etc et que les utilisateurs qui utilisent l'application auront l'acces aux informations de ce lieu y compris l'adresse Google Maps",
        "video":reactNative,
        "techno":[ 
            {"id":1,"nom":"ReactNative"},
            {"id":2,"nom":"Firebase"},
            {"id":3,"nom":"Html"},
            {"id":4,"nom":"Css"}
        ]
    },
    {
        "titre":"Création d’une application bureau de chat",
        "desc":"C'est un projet java avec les socket, mon travail etait de creer deux interfaces graphiques desktop avec javafx,un qui avait le role du serveur et l'autre ,l'interface utilisateur permet de s'envoyer des messages entres utilisateurs apres un login",
        "video":socket,
        "techno":[ 
            {"id":1,"nom":"Java"},
            {"id":2,"nom":"JavaFx"},
            {"id":3,"nom":"Mysql"}
        ]
    },

];
export default Data;
