// Translation system for the Catechism platform
const translations = {
    interface: {
        en: {
            site_title: "Catholic Catechism",
            site_subtitle: "Interactive Learning Platform",
            welcome_title: "Welcome to the Interactive Catechism",
            welcome_description: "Explore the teachings of the Catholic Church through an interactive, age-appropriate platform. The Catechism is organized into four main parts that guide us in understanding our faith.",
            explore: "Explore",
            back_to_overview: "← Back to Overview",
            age_group: "Age Group:",
            language: "Language:",
            children: "Children (6-12)",
            teens: "Teens (13-17)",
            adults: "Adults (18+)",
            copyright: "© 2025 Catholic Catechism Interactive Platform. Based on the official Catechism of the Catholic Church.",
            official_source: "Official Vatican Source"
        },
        pt: {
            site_title: "Catecismo Católico",
            site_subtitle: "Plataforma Interativa de Aprendizagem",
            welcome_title: "Bem-vindos ao Catecismo Interativo",
            welcome_description: "Explore os ensinamentos da Igreja Católica através de uma plataforma interativa e adequada à idade. O Catecismo está organizado em quatro partes principais que nos guiam na compreensão de nossa fé.",
            explore: "Explorar",
            back_to_overview: "← Voltar à Visão Geral",
            age_group: "Faixa Etária:",
            language: "Idioma:",
            children: "Crianças (6-12)",
            teens: "Adolescentes (13-17)",
            adults: "Adultos (18+)",
            copyright: "© 2025 Plataforma Interativa do Catecismo Católico. Baseado no Catecismo oficial da Igreja Católica.",
            official_source: "Fonte Oficial do Vaticano"
        },
        la: {
            site_title: "Catechismus Catholicus",
            site_subtitle: "Platforma Interactiva Discendi",
            welcome_title: "Salve ad Catechismum Interactivum",
            welcome_description: "Explora doctrinas Ecclesiae Catholicae per platformam interactivam et aetati aptam. Catechismus in quattuor partes principales organizatur quae nos in fide nostra intelligenda ducunt.",
            explore: "Explora",
            back_to_overview: "← Redire ad Conspectum Generalem",
            age_group: "Aetas:",
            language: "Lingua:",
            children: "Pueri (6-12)",
            teens: "Adolescentes (13-17)",
            adults: "Adulti (18+)",
            copyright: "© 2025 Platforma Interactiva Catechismi Catholici. Fundata in Catechismo officiali Ecclesiae Catholicae.",
            official_source: "Fons Officialis Vaticanus"
        }
    },
    
    prayers: {
        our_father: {
            en: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
            pt: "Pai nosso que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
            la: "Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen."
        },
        hail_mary: {
            en: "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
            pt: "Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.",
            la: "Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen."
        },
        glory_be: {
            en: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
            pt: "Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre, pelos séculos dos séculos. Amém.",
            la: "Gloria Patri, et Filio, et Spiritui Sancto, sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen."
        }
    },

    commandments: {
        list: {
            en: [
                "I am the LORD your God: you shall not have strange gods before me.",
                "You shall not take the name of the LORD your God in vain.",
                "Remember to keep holy the LORD'S Day.",
                "Honor your father and your mother.",
                "You shall not murder.",
                "You shall not commit adultery.",
                "You shall not steal.",
                "You shall not bear false witness against your neighbor.",
                "You shall not covet your neighbor's wife.",
                "You shall not covet your neighbor's goods."
            ],
            pt: [
                "Eu sou o SENHOR teu Deus: não terás outros deuses diante de mim.",
                "Não tomarás o nome do SENHOR teu Deus em vão.",
                "Lembra-te de santificar o dia do SENHOR.",
                "Honra teu pai e tua mãe.",
                "Não matarás.",
                "Não cometerás adultério.",
                "Não roubarás.",
                "Não dirás falso testemunho contra o teu próximo.",
                "Não cobiçarás a mulher do teu próximo.",
                "Não cobiçarás os bens do teu próximo."
            ],
            la: [
                "Ego sum Dominus Deus tuus: non habebis deos alienos coram me.",
                "Non assumes nomen Domini Dei tui in vanum.",
                "Memento ut diem sabbati sanctifices.",
                "Honora patrem tuum et matrem tuam.",
                "Non occides.",
                "Non moechaberis.",
                "Non furtum facies.",
                "Non loqueris contra proximum tuum falsum testimonium.",
                "Non concupisces uxorem proximi tui.",
                "Non concupisces rem proximi tui."
            ]
        }
    },

    beatitudes: {
        list: {
            en: [
                "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
                "Blessed are those who mourn, for they will be comforted.",
                "Blessed are the meek, for they will inherit the earth.",
                "Blessed are those who hunger and thirst for righteousness, for they will be filled.",
                "Blessed are the merciful, for they will be shown mercy.",
                "Blessed are the pure in heart, for they will see God.",
                "Blessed are the peacemakers, for they will be called children of God.",
                "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven."
            ],
            pt: [
                "Bem-aventurados os pobres em espírito, pois deles é o reino dos céus.",
                "Bem-aventurados os que choram, pois serão consolados.",
                "Bem-aventurados os mansos, pois herdarão a terra.",
                "Bem-aventurados os que têm fome e sede de justiça, pois serão saciados.",
                "Bem-aventurados os misericordiosos, pois alcançarão misericórdia.",
                "Bem-aventurados os puros de coração, pois verão a Deus.",
                "Bem-aventurados os pacificadores, pois serão chamados filhos de Deus.",
                "Bem-aventurados os perseguidos por causa da justiça, pois deles é o reino dos céus."
            ],
            la: [
                "Beati pauperes spiritu, quoniam ipsorum est regnum caelorum.",
                "Beati qui lugent, quoniam ipsi consolabuntur.",
                "Beati mites, quoniam ipsi possidebunt terram.",
                "Beati qui esuriunt et sitiunt iustitiam, quoniam ipsi saturabuntur.",
                "Beati misericordes, quoniam ipsi misericordiam consequentur.",
                "Beati mundo corde, quoniam ipsi Deum videbunt.",
                "Beati pacifici, quoniam filii Dei vocabuntur.",
                "Beati qui persecutionem patiuntur propter iustitiam, quoniam ipsorum est regnum caelorum."
            ]
        }
    },

    sacraments: {
        list: {
            en: [
                "Baptism",
                "Confirmation", 
                "Eucharist",
                "Penance",
                "Anointing of the Sick",
                "Holy Orders",
                "Matrimony"
            ],
            pt: [
                "Batismo",
                "Confirmação",
                "Eucaristia", 
                "Penitência",
                "Unção dos Enfermos",
                "Ordem",
                "Matrimônio"
            ],
            la: [
                "Baptismus",
                "Confirmatio",
                "Eucharistia",
                "Paenitentia",
                "Unctio Infirmorum",
                "Ordo",
                "Matrimonium"
            ]
        }
    }
};

// Function to get translated text
function getTranslation(category, key, language = 'en') {
    try {
        if (translations[category] && translations[category][language] && translations[category][language][key]) {
            return translations[category][language][key];
        }
        // Fallback to English if translation not found
        if (language !== 'en' && translations[category] && translations[category]['en'] && translations[category]['en'][key]) {
            return translations[category]['en'][key];
        }
        return key; // Return key if no translation found
    } catch (error) {
        console.warn('Translation not found:', category, key, language);
        return key;
    }
}

// Function to get interface translation
function getInterfaceText(key, language = 'en') {
    return getTranslation('interface', key, language);
}
