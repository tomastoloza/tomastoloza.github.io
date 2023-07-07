import {ExperienceItem} from "../models";

const mtfInfo = {
  descriptionItems: ["Migrated tests of various Mulesoft connectors from Java (JUnit) to MTF, Mulesoft's own testing framework.",
    "Ensured a smooth transition and made sure that existing test suites functioned correctly.",
    "Collaborated with other Mulesoft teams to provide consultation and assistance in developing new tests for future connectors.",
    "Worked on significant connectors like SAP, Salesforce, and Oracle EBS, among others.",
    "Ensured the testing frameworks for these connectors were robust enough to detect issues before they appeared in production environments."],
  skills: [
    "Proficient in Mulesoft's testing framework (MTF)",
    "Strong experience with Java and JUnit",
    "Collaboration and teamwork skills",
    "Familiarity with SAP, Salesforce, Oracle EBS connectors"
  ]
}

const epiInfo = {
  descriptionItems: [
    "The focus of the role was on maintaining multiple Mulesoft's connectors.",
    "Performed tasks such as resolving bugs and vulnerabilities, implementing new features, and developing new connectors.",
    "Worked on developing connectors for various software platforms, including MongoDB, NetSuite, and others."
  ],
  skills: [
    "Strong experience with Mulesoft's connectors",
    "Proficient in resolving bugs and vulnerabilities",
    "Ability to implement new features",
    "Experience in developing connectors",
    "Familiarity with MongoDB, NetSuite, and other software platforms"
  ]
}
const muleInfo = {
  descriptionItems: [
    "Involves designing, implementing, and testing whole new features for connectors.",
    "Tasks require working closely with the team to ensure features align with customer's needs and company's goals.",
    "Works with customers to review connectors' behavior, identify and fix bugs.",
    "Requires excellent communication and collaboration skills to incorporate customer feedback for improving functionality and usability of connectors."
  ],
  skills: [
    "Strong design and implementation skills",
    "Proficient in testing new features",
    "Ability to work collaboratively with a team",
    "Excellent communication skills",
    "Attention to detail for bug identification and fixing",
    "Customer-focused mindset"
  ]
}

export const experienceItems = [
  new ExperienceItem("Software Engineer AMTS", "MuleSoft", "Oct 2021", "now", muleInfo),
  new ExperienceItem("Java Software Developer", "Epidata", "Apr 2020", "Oct 2021", epiInfo),
  new ExperienceItem("MTF & Munit Developer", "Epidata", "Oct 2018", "Apr 2020", mtfInfo)
];
export const educationItems = [
  new ExperienceItem("Licenciatura en Informática", "Universidad Nacional de Hurlingham", "Mar 2020", "now", undefined, "https://unahur.edu.ar/es/licenciatura-en-informatica", ""),
  new ExperienceItem("Ingeniería en computación", "Universidad Nacional de Tres de Febrero", "Aug 2017", " Dec 2020 (unfinished)", undefined, "https://www.untref.edu.ar/carrera/ingenieria-en-computacion", ""),
];

