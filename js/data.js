// Data Definitions
const data = {
    about: {
        name: "KC",
        bio: "I am a research assistant at PREDICT- Centre for Molecular Prediction of Inflammatory Bowel Disease, Aalborg University. I completed my PhD at the Section of Health Data Science and AI, in the Department of Public Health, University of Copenhagen. My PhD was based on machine learning in healthcare, from creating ageing biomarkers from Danish skin biopsies, to creating a worst-case malaria baseline scenario in sub-Saharan Africa using satellite images, to starting a discussion on navigating fairness aspects in healthcare modelling. My PhD also presented how the data gaps and healthcare inequalities across the world can be bridged using machine learning in data-sparse settings. <br><br>My primary interest is using machine learning in healthcare applications. I am also interested in the law and ethics of AI technologies, with a focus on their use for minority groups. My current focus is machine learning with genomics for IBD (Crohn's disease and Ulcerative Colitis) disease trajectories.",
        tagline: "PhD | AI | Healthcare",
        initials: "KC",
        location: "Copenhagen, Denmark"
    },
    contact: {
        email: "kcuses12@gmail.com", "chakradeo@dcm.aau.dk",
        address: "Copenhagen, Denmark",
        linkedin: "https://www.linkedin.com/in/kaustubhchakradeo/",
        github: "https://github.com/kaustubhchakradeo",
        scholar: "https://scholar.google.co.in/citations?user=w7q2xosAAAAJ&hl=da&oi=ao",
        orcid: "https://orcid.org/0000-0003-0946-0524"
    },
    experience: [
        {
            role: "Research Scientist, PREDICT",
            institution: "Aalborg University",
            date: "Oct 2025 – Present",
            description: "Statistical and machine learning methods for molecular biology – association, risk prediction, causality assessment on pre- and post-diagnostic data for IBD and other inflammatory conditions."
        },
        {
            role: "Guest Researcher",
            institution: "Oxford University, Department of Computer Science",
            date: "Sept 2024 – Nov 2024",
            description: "Deep learning techniques for extracting natural and built-up environmental information from satellite images to predict environmental impacts on health, as well as on socio-economical status in Sub Saharan Africa."
        },
        {
            role: "Research Intern",
            institution: "Thirona Bv",
            date: "Oct 2021 – May 2022",
            description: "Classification of phases of respiration- inspiration and expiration from 3D chest CT scans to help in pulmonary disease detection. Used complete 3D volumes with variable depths with a 3D architecture. Developed an explainable AI model to corroborate the working of the model."
        },
        {
            role: "Research Intern",
            institution: "ScreenPoint Medical",
            date: "June 2021 – Sept 2021",
            description: "Developed a VGG-based Out of Distribution (OOD) model using PyTorch to create confidence scores for breast cancer mammography images. This model accepted breast images in correct orientations, and rejected images with bad positioning, wrong orientations, bad intensity and bad quality images including artefacts. Manually evaluated thirty thousand breast mammography images and classified them into different OOD classes."
        }
    ],
    education: [
        {
            title: "PhD in Public Health and Epidemiology",
            institution: "University of Copenhagen, Denmark",
            date: "2022 – 2025",
            description: "Using self-supervised deep learning to extract biological ageing signals from skin biopsy images; to derive a worst-case baseline malaria transmission scenario from satellite imagery in sub-Saharan Africa; and to assess fairness constraints in healthcare modelling, with the unifying aim of enabling robust public health insights in data-sparse contexts. Thesis title Self-Supervised Deep Learning for Multi-Scale Medical Imaging."
        },
        {
            title: "Master of Science, Artificial Intelligence",
            institution: "Radboud University, the Netherlands",
            date: "2020 – 2022",
            description: ""
        },
        {
            title: "Bachelor of Engineering, Information Technology",
            institution: "Pune University, India",
            date: "2015 – 2019",
            description: ""
        }
    ],
    publications: [
        {
            title: "Estimating the baseline parasite rate of Malaria in sub-Saharan Africa",
            authors: "Chakradeo, Kaustubh, et al.",
            venue: "Under Review: Nature Communications",
            year: "2025",
            url: "https://www.medrxiv.org/content/10.1101/2025.05.16.25327745v1"
        },
        {
            title: "Contrastive Deep Learning Reveals Age Biomarkers in Histopathological Skin Biopsies",
            authors: "Chakradeo, Kaustubh, et al.",
            venue: "Under Review: Nature Partner Journal Digital Health",
            year: "2024",
            url: "https://arxiv.org/pdf/2411.16956"
        },
        {
            title: "Navigating fairness aspects of clinical prediction models",
            authors: "Chakradeo, Kaustubh, et al.",
            venue: "BMC Medicine",
            year: "2025",
            url: "https://link.springer.com/article/10.1186/s12916-025-04340-3"
        },
        {
            title: "Climate Change and Malaria: A Call for Robust Analytics",
            authors: "Laydon, Daniel J, ..., Chakradeo, Kaustubh, et al.",
            venue: "medRxiv",
            year: "2024",
            url: "https://www.medrxiv.org/content/10.1101/2024.09.16.24313623v3"
        },
        {
            title: "Human-AI Complementarity in Diagnostic Radiology: The Case of Double Reading",
            authors: "Wagner, Isaac and Chakradeo, Kaustubh",
            venue: "Philosophy and Technology",
            year: "2025",
            url: "https://link.springer.com/article/10.1007/s13347-025-00886-5"
        },
        {
            title: "Real-time plant disease dataset development and detection of plant disease using deep learning",
            authors: "Joseph, Diana Susan, Pawar, Pranav M and Chakradeo, Kaustubh",
            venue: "IEEE Access",
            year: "2024",
            url: "https://doi.org/10.1109/ACCESS.2024.3358333"
        },
        {
            title: "Malaria Parasite Detection Using Deep Learning Methods",
            authors: "Chakradeo, Kaustubh, et al.",
            venue: "International Journal of Computer and Information Engineering",
            year: "2021",
            url: ""
        },
        {
            title: "Breast cancer recurrence prediction using machine learning",
            authors: "Chakradeo, Kaustubh, et al.",
            venue: "IEEE Conference on ICT",
            year: "2019",
            url: "https://doi.org/10.1109/CICT48419.2019.9066248"
        },
        {
            title: "Chatbot assistant for english as a second language learners",
            authors: "Vyawahare, Sanyog and Chakradeo, Kaustubh",
            venue: "ICCDW",
            year: "2020",
            url: "https://doi.org/10.1109/ICCDW45521.2020.9318672"
        }
    ],
    grants: [
        {
            title: "Research Grant (30,000 DKK)",
            award: "University of Copenhagen Graduate School",
            date: "2024",
            description: "For change in research environment during PhD."
        },
        {
            title: "Research Grant (10,500 DKK)",
            award: "William Demant Fonden",
            date: "2024",
            description: "For change in research environment during PhD."
        },
        {
            title: "Scholarship (7,400 DKK)",
            award: "Sakal India Foundation",
            date: "2020",
            description: "For students abroad from India for master studies."
        },
        {
            title: "Best Poster Award (1st Place)",
            award: "Nordic AI Meet, Denmark",
            date: "2024",
            description: "Poster: Malaria Prediction with Remote Sensing and Deep Learning."
        },
        {
            title: "Best Poster Award (4th Place)",
            award: "USA – European Exposome Symposium, Italy",
            date: "2023",
            description: "Poster: Malaria Prediction with Remote Sensing and Deep Learning."
        },
        {
            title: "Best Presentation Award (1st Place)",
            award: "ICMLMCV, New York",
            date: "2020",
            description: "Presentation: Malaria Parasite Detection using Deep learning Methods."
        }
    ],
    talks: [
        {
            title: "Beyond Generative AI: Back to the Fundamentals",
            institution: "Birla Institute of Technology Pilani, Dubai Campus",
            date: "2025"
        },
        {
            title: "Predicting Malaria Using Satellite Imaging and Deep Learning",
            institution: "Earth Observation Network, Imperial College London",
            date: "2024"
        },
        {
            title: "The Epistemic Payoff of Human-AI Double-Reading in Radiology",
            institution: "Danish Society for Medical Philosophy, Ethics and Methodology",
            date: "2023"
        },
        {
            title: "Contrastive Deep Learning on Histopathological Images",
            institution: "NNF Challenge Symposium, Novo Nordisk, Copenhagen",
            date: "2023"
        },
        {
            title: "Malaria Predictions using Satellite Images with Contrastive Learning",
            institution: "Imperial College London",
            date: "2023"
        },
        {
            title: "Host: Checking our Digital and AI Privileges",
            institution: "Department Conference at the University of Copenhagen",
            date: "2024"
        },
        {
            title: "Host: Can ChatGPT pass your exam?",
            institution: "Department Conference at the University of Copenhagen",
            date: "2023"
        }
    ],
    teaching: [
        {
            title: "Data Visualization and Storytelling",
            role: "PhD Course",
            institution: "University of Copenhagen",
            date: "2023, 2024"
        },
        {
            title: "Ethics of AI",
            role: "Master level Course",
            institution: "University of Copenhagen",
            date: "2023"
        },
        {
            title: "Responsible Practices in AI",
            role: "Bachelor level Course",
            institution: "Birla Institute of Technology Pilani, Dubai Campus",
            date: "2023"
        },
        {
            title: "External Supervisor: Deep Learning and Remote Sensing",
            role: "Master Student Project",
            institution: "Social Data Science at the University of Copenhagen",
            date: "2024"
        },
        {
            title: "External Supervisor: Computer Vision for Medical Imaging",
            role: "Bachelor Student Project",
            institution: "Birla Institute of Technology Pilani, Dubai Campus",
            date: "2023"
        }
    ],
    skills: {
        "Programming": "Python, Tensorflow, Keras, Pytorch, R, Linux System Administration, SQL, C++, Google Earth Engine",
        "Languages": "English (Native), Marathi (Native), Hindi (Intermediate), Danish (B2), Dutch (A2), German (A2)"
    }
};
