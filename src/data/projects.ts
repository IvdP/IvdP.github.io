export interface Image {
  img: string;
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  img: string;
  alt: string;
  description: string;
  fulldescription?: string[];
  github?: string;
  media?: Image[];
}

export const projects: Project[] = [{
  id: 'studentassistent',
  name: 'Studentassistent AI',
  img: 'src\\media\\studentassistent.png',
  alt: 'Een afbeelding van de studentassistent.',
  description: 'Binnen het NotS project in het derde jaar van mijn opleiding, heb ik samen met mijn groep een studentassistent ontwikkeld.',
  fulldescription: ['Binnen het NotS project in het derde jaar van mijn opleiding, heb ik samen met mijn groep een studentassistent ontwikkeld. De studentassistent is een platform die scholen kunnen gebruiken om hun studenten op een nuttige manier gebruik te laten maken van AI, zodat het kopieren en plakken van bijvoorbeeld stukken code voorkomen wordt. Docenten en studenten kunnen inloggen op het platform en binnen projecten berichten versturen, waarop ze antwoord krijgen van de AI-tool. Docenten kunnen limitaties toevoegen aan de prompts die de studenten versturen. Deze limitaties worden achter de prompt geplakt en zo verstuurd naar de API van OpenAI. Het antwoord dat de API teruggeeft wordt weergegeven binnen de studentassistent.', 'Om te beargumenteren waarom de studentassistent een goede en waardevolle service zal zijn, hebben we een storyboard ontwikkeld die ik hiernaast geillustreerd heb.', 'Voor de studentassistent hebben we zowel de front- als backend gemaakt, waarbij ik vooral aan de backend heb gewerkt. De frontend is ontwikkeld met TypeScript en het framework NextJS en de backend is geschreven in C# .NET. De database die de studentassistent gebruikt is PostgreSQL.'],
  media: [{img: 'src\\media\\storyboard.png', alt: 'Een storyboard van de student assistent.'}],
}, {
  id: 'portfolio',
  name: 'Portfolio',
  img: 'src\\media\\portfolio.png',
  alt: 'Een afbeelding van mijn portfolio website.',
  description: 'Tijdens de eerste weken van mijn meewerkstage heb ik deze website ontwikkeld om kennis te maken met TypeScript, Mithril.js en SCSS.',
  fulldescription: ['Tijdens de eerste weken van mijn meewerkstage heb ik deze website ontwikkeld om kennis te maken met TypeScript, Mithril.js en SCSS. Ik had hiervoor al ervaring met JavaScript en React, maar nog niet met TypeScript en Mithril.js.', 'Voordat ik begon heb ik in Figma wireframes gemaakt en inspiratie opgedaan via Pinterest. Ik heb voor dit lichte en vrolijke design met een directe, amicale tone-of-voice gekozen omdat ik mezelf zo goed mogelijk wil representeren op deze website. Daarnaast heb ik voor een one-page website gekozen omdat je zo een duidelijk overzicht hebt van mijn persoonlijkheid, passies en ervaringen. Ik heb de website zo veel mogelijk responsive gemaakt zodat deze werkt op alle devices.', 'Aangezien ik deze code volledig zelf heb geschreven, heb ik de code openbaar gemaakt, zodat je een kijkje kan nemen. De knop hieronder brengt je naar de GitHub repository.'],
  github: 'https://github.com/IvdP/ilsevandepeppel'
}, {
  id: 'komtnog',
  name: 'Komt nog...',
  img: '',
  alt: '',
  description: ''
}];
