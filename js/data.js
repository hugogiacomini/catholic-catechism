// Catechism Content Data Structure
const catechismData = {
    parts: {
        1: {
            title: {
                en: "The Profession of Faith",
                pt: "A Profissão de Fé",
                la: "Professio Fidei"
            },
            description: {
                en: "What we believe - The Creed, Scripture, and Tradition",
                pt: "O que acreditamos - O Credo, a Escritura e a Tradição",
                la: "Quid credimus - Credo, Scriptura, et Traditio"
            },
            sections: [
                {
                    id: "s1-1",
                    title: {
                        en: "Man's Capacity for God",
                        pt: "A Capacidade do Homem para Deus",
                        la: "Capacitas Hominis ad Deum"
                    },
                    content: {
                        adults: {
                            en: "The desire for God is written in the human heart, because man is created by God and for God; and God never ceases to draw man to himself. Only in God will he find the truth and happiness he never stops searching for.",
                            pt: "O desejo de Deus está inscrito no coração do homem, porque o homem foi criado por Deus e para Deus; e Deus não cessa de atrair o homem para si. Só em Deus encontrará a verdade e a felicidade que não para de procurar.",
                            la: "Desiderium Dei in corde hominis inscriptum est, quia homo a Deo et propter Deum creatus est; et Deus nunquam cessat hominem ad se trahere. In solo Deo veritatem et beatitudinem inveniet quas quaerere non desinit."
                        },
                        teens: {
                            en: "Deep down, every person has a longing for God. This isn't something we learn - it's built into who we are as human beings. God created us to know Him and love Him, and our hearts are restless until we find our home in Him.",
                            pt: "No fundo, toda pessoa tem um anseio por Deus. Isso não é algo que aprendemos - está construído em quem somos como seres humanos. Deus nos criou para conhecê-Lo e amá-Lo, e nossos corações estão inquietos até encontrarmos nossa casa Nele.",
                            la: "In profundo, omnis persona desiderium Dei habet. Hoc non est aliquid quod discimus - in eo quod sumus ut essentia humana aedificatum est."
                        },
                        children: {
                            en: "God made you special! He put love for Him right in your heart. That's why sometimes you wonder about God and want to know more about Him. God loves you so much and wants to be your friend!",
                            pt: "Deus te fez especial! Ele colocou amor por Ele bem no seu coração. É por isso que às vezes você se pergunta sobre Deus e quer saber mais sobre Ele. Deus te ama muito e quer ser seu amigo!",
                            la: "Deus te specialem fecit! Amorem sui in corde tuo posuit."
                        }
                    }
                },
                {
                    id: "s1-2",
                    title: {
                        en: "God Comes to Meet Man",
                        pt: "Deus Vem ao Encontro do Homem",
                        la: "Deus Homini Obviam Venit"
                    },
                    content: {
                        adults: {
                            en: "By natural reason man can know God with certainty, on the basis of his works. But there is another order of knowledge, which man cannot possibly arrive at by his own powers: the order of divine Revelation.",
                            pt: "Pela razão natural, o homem pode conhecer Deus com certeza, com base em suas obras. Mas há outra ordem de conhecimento, à qual o homem não pode chegar por suas próprias forças: a ordem da Revelação divina.",
                            la: "Ratione naturali homo Deum certo cognoscere potest, ex operibus eius. Sed alius ordo cognitionis est, ad quem homo propriis viribus pervenire non potest: ordo divinae Revelationis."
                        },
                        teens: {
                            en: "We can learn about God by looking at the world around us and using our minds. But God also chose to reveal Himself to us directly through Scripture and through Jesus Christ, showing us things we could never figure out on our own.",
                            pt: "Podemos aprender sobre Deus olhando o mundo ao nosso redor e usando nossas mentes. Mas Deus também escolheu se revelar diretamente através das Escrituras e através de Jesus Cristo, mostrando-nos coisas que nunca poderíamos descobrir sozinhos.",
                            la: "De Deo discere possumus mundum circa nos aspiciendo et mentes nostras utendo."
                        },
                        children: {
                            en: "God wants us to know Him! He shows us who He is through the beautiful world He made and through the Bible. Most importantly, He sent Jesus to show us exactly what God is like - full of love!",
                            pt: "Deus quer que nós O conheçamos! Ele nos mostra quem Ele é através do belo mundo que fez e através da Bíblia. Mais importante, Ele enviou Jesus para nos mostrar exatamente como Deus é - cheio de amor!",
                            la: "Deus vult nos Eum cognoscere! Nobis ostendit quis sit per pulchrum mundum quem fecit."
                        }
                    }
                },
                {
                    id: "s1-3",
                    title: {
                        en: "The Revelation of God",
                        pt: "A Revelação de Deus",
                        la: "Revelatio Dei"
                    },
                    content: {
                        adults: {
                            en: "God reveals His 'plan of loving goodness', conceived in Christ, from before the foundation of the world, in his eternal being as Father, Son, and Holy Spirit. This plan is a 'grace which was given to us in Christ Jesus before the ages began'.",
                            pt: "Deus revela seu 'plano de bondade amorosa', concebido em Cristo, desde antes da fundação do mundo, em seu ser eterno como Pai, Filho e Espírito Santo. Este plano é uma 'graça que nos foi dada em Cristo Jesus antes dos tempos eternos'.",
                            la: "Deus revelat suum 'consilium benevolentiae amantis', in Christo conceptum, ante mundi fundamenta, in suo aeterno esse ut Pater, Filius, et Spiritus Sanctus."
                        },
                        teens: {
                            en: "God had a plan to show His love to us even before He created the world. This plan was centered on Jesus Christ, and it shows us that God is a Trinity - Father, Son, and Holy Spirit - who have always existed in perfect love.",
                            pt: "Deus tinha um plano para mostrar Seu amor por nós mesmo antes de criar o mundo. Este plano estava centrado em Jesus Cristo, e nos mostra que Deus é uma Trindade - Pai, Filho e Espírito Santo - que sempre existiram em amor perfeito.",
                            la: "Deus consilium habebat ad ostendendum amorem suum nobis etiam antequam mundum crearet."
                        },
                        children: {
                            en: "Before God even made the world, He had a wonderful plan to show His love to everyone! This plan was all about sending Jesus to us. God is three persons in one - the Father, Jesus, and the Holy Spirit - and they all love us very much!",
                            pt: "Antes mesmo de Deus fazer o mundo, Ele tinha um plano maravilhoso para mostrar Seu amor a todos! Este plano era todo sobre enviar Jesus para nós. Deus é três pessoas em uma - o Pai, Jesus e o Espírito Santo - e todos nos amam muito!",
                            la: "Antequam Deus etiam mundum faceret, consilium mirabile habebat ad ostendendum amorem suum omnibus!"
                        }
                    }
                },
                {
                    id: "s1-4",
                    title: {
                        en: "The Transmission of Divine Revelation",
                        pt: "A Transmissão da Revelação Divina",
                        la: "Transmissio Divinae Revelationis"
                    },
                    content: {
                        adults: {
                            en: "Christ the Lord in whom the full revelation of the supreme God is brought to completion, commissioned the Apostles to preach to all men that Gospel which is the source of all saving truth and moral teaching.",
                            pt: "Cristo, o Senhor, em quem a revelação plena do Deus supremo é levada à perfeição, comissionou os Apóstolos a pregar a todos os homens aquele Evangelho que é a fonte de toda verdade salvífica e ensinamento moral.",
                            la: "Christus Dominus in quo plena revelatio summi Dei ad perfectionem perducitur, Apostolos mandavit ut omnibus hominibus praedicarent Evangelium illud quod fons est omnis veritatis salvificae et disciplinae moralis."
                        },
                        teens: {
                            en: "Jesus gave the Apostles the job of sharing the Gospel - the Good News - with everyone in the world. This Gospel contains all the truth we need for salvation and shows us how to live good lives.",
                            pt: "Jesus deu aos Apóstolos a tarefa de compartilhar o Evangelho - as Boas Novas - com todos no mundo. Este Evangelho contém toda a verdade que precisamos para a salvação e nos mostra como viver vidas boas.",
                            la: "Iesus Apostolis munus dedit communicandi Evangelium - Bonum Nuntium - cum omnibus in mundo."
                        },
                        children: {
                            en: "Jesus told his special friends, the Apostles, to tell everyone in the world the Good News about God's love. This Good News teaches us how to be saved and how to be good people.",
                            pt: "Jesus disse aos seus amigos especiais, os Apóstolos, para contar a todos no mundo as Boas Novas sobre o amor de Deus. Essas Boas Novas nos ensinam como ser salvos e como ser pessoas boas.",
                            la: "Iesus suis amicis specialibus, Apostolis, dixit ut omnibus in mundo Bonum Nuntium de amore Dei narrarent."
                        }
                    }
                }
            ]
        },
        
        2: {
            title: {
                en: "The Profession of the Christian Faith",
                pt: "A Profissão da Fé Cristã",
                la: "Professio Fidei Christianae"
            },
            description: {
                en: "The creeds and what Christians believe about God, Jesus Christ, and the Church",
                pt: "Os credos e aquilo em que os cristãos acreditam sobre Deus, Jesus Cristo e a Igreja",
                la: "Symbola et quae Christiani de Deo, Iesu Christo, et Ecclesia credunt"
            },
            sections: [
                {
                    id: "s2-1",
                    title: {
                        en: "I Believe in God the Father",
                        pt: "Creio em Deus Pai",
                        la: "Credo in Deum Patrem"
                    },
                    content: {
                        adults: {
                            en: "We believe in one God, the Father Almighty, maker of heaven and earth, of all things visible and invisible. God is the source of all existence, the first cause and final end of all things.",
                            pt: "Cremos em um só Deus, Pai Todo-Poderoso, criador do céu e da terra, de todas as coisas visíveis e invisíveis. Deus é a fonte de toda existência, a primeira causa e fim último de todas as coisas.",
                            la: "Credimus in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium. Deus fons est omnis existentiae, prima causa et finis ultimus omnium rerum."
                        },
                        teens: {
                            en: "Christians believe in one God who is like a perfect Father to us. He created everything - the whole universe, everything we can see and even things we can't see. God is the beginning and end of everything.",
                            pt: "Os cristãos acreditam em um Deus que é como um Pai perfeito para nós. Ele criou tudo - todo o universo, tudo que podemos ver e até coisas que não podemos ver. Deus é o começo e o fim de tudo.",
                            la: "Christiani credunt in unum Deum qui est sicut perfectus Pater nobis."
                        },
                        children: {
                            en: "God is our loving Father in heaven! He made everything - the stars, the moon, the earth, and you and me. God made everything because He loves us. He takes care of us like the best daddy ever!",
                            pt: "Deus é nosso Pai amoroso no céu! Ele fez tudo - as estrelas, a lua, a terra, e você e eu. Deus fez tudo porque Ele nos ama. Ele cuida de nós como o melhor papai de todos!",
                            la: "Deus est noster amans Pater in caelo! Omnia fecit - stellas, lunam, terram, et te et me."
                        }
                    }
                },
                {
                    id: "s2-2",
                    title: {
                        en: "I Believe in Jesus Christ",
                        pt: "Creio em Jesus Cristo",
                        la: "Credo in Iesum Christum"
                    },
                    content: {
                        adults: {
                            en: "We believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God and true man, who for us and for our salvation came down from heaven.",
                            pt: "Cremos em um só Senhor Jesus Cristo, Filho Unigênito de Deus, nascido do Pai antes de todos os séculos. Deus de Deus, Luz da Luz, verdadeiro Deus e verdadeiro homem, que por nós e para nossa salvação desceu do céu.",
                            la: "Credimus in unum Dominum Iesum Christum, Filium Dei unigenitum, ex Patre natum ante omnia saecula. Deum de Deo, Lumen de Lumine, Deum verum et hominem verum, qui propter nos et propter nostram salutem descendit de caelis."
                        },
                        teens: {
                            en: "Jesus Christ is God's only Son, who has always existed with the Father. He is fully God and fully human at the same time. Jesus came down from heaven to save us and show us God's love.",
                            pt: "Jesus Cristo é o único Filho de Deus, que sempre existiu com o Pai. Ele é totalmente Deus e totalmente humano ao mesmo tempo. Jesus desceu do céu para nos salvar e mostrar o amor de Deus.",
                            la: "Iesus Christus est unicus Filius Dei, qui semper cum Patre exstitit."
                        },
                        children: {
                            en: "Jesus is God's special Son! He came from heaven to earth to be with us and to save us. Jesus is both God and a person like us, but He never did anything wrong. He loves us so much!",
                            pt: "Jesus é o Filho especial de Deus! Ele veio do céu para a terra para estar conosco e nos salvar. Jesus é tanto Deus quanto uma pessoa como nós, mas Ele nunca fez nada de errado. Ele nos ama muito!",
                            la: "Iesus est specialis Filius Dei! De caelo ad terram venit ut nobiscum esset et nos salvaret."
                        }
                    }
                },
                {
                    id: "s2-3",
                    title: {
                        en: "I Believe in the Holy Spirit",
                        pt: "Creio no Espírito Santo",
                        la: "Credo in Spiritum Sanctum"
                    },
                    content: {
                        adults: {
                            en: "We believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets.",
                            pt: "Cremos no Espírito Santo, Senhor que dá a vida, e procede do Pai e do Filho, e com o Pai e o Filho é adorado e glorificado, e falou pelos profetas.",
                            la: "Credimus in Spiritum Sanctum, Dominum et vivificantem, qui ex Patre Filioque procedit, qui cum Patre et Filio simul adoratur et conglorificatur, qui locutus est per prophetas."
                        },
                        teens: {
                            en: "The Holy Spirit is God too, just like the Father and Jesus. The Holy Spirit gives us life and helps us understand God. He spoke through the prophets in the Bible and continues to guide the Church today.",
                            pt: "O Espírito Santo também é Deus, assim como o Pai e Jesus. O Espírito Santo nos dá vida e nos ajuda a entender Deus. Ele falou através dos profetas na Bíblia e continua a guiar a Igreja hoje.",
                            la: "Spiritus Sanctus etiam Deus est, sicut Pater et Iesus."
                        },
                        children: {
                            en: "The Holy Spirit is God's love that lives in our hearts! He helps us pray, helps us be good, and helps us know that God loves us. The Holy Spirit is like God's special helper who is always with us.",
                            pt: "O Espírito Santo é o amor de Deus que vive em nossos corações! Ele nos ajuda a orar, nos ajuda a ser bons, e nos ajuda a saber que Deus nos ama. O Espírito Santo é como o ajudante especial de Deus que está sempre conosco.",
                            la: "Spiritus Sanctus est amor Dei qui in cordibus nostris vivit!"
                        }
                    }
                }
            ]
        },
        
        3: {
            title: {
                en: "The Celebration of the Christian Mystery",
                pt: "A Celebração do Mistério Cristão",
                la: "Celebratio Mysterii Christiani"
            },
            description: {
                en: "How we worship - Liturgy and the Seven Sacraments",
                pt: "Como adoramos - Liturgia e os Sete Sacramentos",
                la: "Quomodo adoramus - Liturgia et Septem Sacramenta"
            },
            sections: [
                {
                    id: "s2-1",
                    title: {
                        en: "The Sacraments of Christian Initiation",
                        pt: "Os Sacramentos da Iniciação Cristã",
                        la: "Sacramenta Initiationis Christianae"
                    },
                    content: {
                        adults: {
                            en: "The three sacraments of Christian initiation - Baptism, Confirmation, and Eucharist - lay the foundations of every Christian life. Through these sacraments, the faithful are born anew, strengthened, and nourished.",
                            pt: "Os três sacramentos da iniciação cristã - Batismo, Confirmação e Eucaristia - estabelecem os fundamentos de toda vida cristã. Através destes sacramentos, os fiéis nascem de novo, são fortalecidos e nutridos.",
                            la: "Tria sacramenta initiationis christianae - Baptismus, Confirmatio, et Eucharistia - fundamenta cuiusque vitae christianae ponunt."
                        },
                        teens: {
                            en: "These three sacraments are like the foundation of your spiritual life. Baptism welcomes you into God's family, Confirmation strengthens your faith with the Holy Spirit, and Eucharist feeds your soul with Jesus himself.",
                            pt: "Estes três sacramentos são como a fundação da sua vida espiritual. O Batismo te recebe na família de Deus, a Confirmação fortalece sua fé com o Espírito Santo, e a Eucaristia alimenta sua alma com o próprio Jesus.",
                            la: "Haec tria sacramenta quasi fundamentum vitae spiritualis tuae sunt."
                        },
                        children: {
                            en: "These special gifts from God help you grow closer to Him! Baptism makes you part of God's family, Confirmation gives you special help from the Holy Spirit, and Holy Communion lets Jesus come into your heart!",
                            pt: "Estes presentes especiais de Deus te ajudam a crescer mais perto Dele! O Batismo te faz parte da família de Deus, a Confirmação te dá ajuda especial do Espírito Santo, e a Comunhão deixa Jesus entrar no seu coração!",
                            la: "Haec dona specialia a Deo te adiuvant propius ad Eum crescere!"
                        }
                    }
                }
            ]
        },
        3: {
            title: {
                en: "Life in Christ",
                pt: "A Vida em Cristo",
                la: "Vita in Christo"
            },
            description: {
                en: "How we live - Moral teachings and the Ten Commandments",
                pt: "Como vivemos - Ensinamentos morais e os Dez Mandamentos",
                la: "Quomodo vivimus - Doctrina moralis et Decem Praecepta"
            },
            sections: [
                {
                    id: "s3-1",
                    title: {
                        en: "The Ten Commandments",
                        pt: "Os Dez Mandamentos",
                        la: "Decem Praecepta"
                    },
                    content: {
                        adults: {
                            en: "The Ten Commandments state what is required in the love of God and love of neighbor. The first three concern love of God, and the other seven love of neighbor. They express the implications of belonging to God through the covenant.",
                            pt: "Os Dez Mandamentos expressam o que é exigido no amor a Deus e no amor ao próximo. Os três primeiros referem-se ao amor a Deus, e os outros sete ao amor ao próximo. Eles expressam as implicações de pertencer a Deus através da aliança.",
                            la: "Decem Praecepta exprimunt quid in amore Dei et amore proximi requiratur. Prima tria ad amorem Dei pertinent, alia septem ad amorem proximi."
                        },
                        teens: {
                            en: "The Ten Commandments aren't just rules - they're God's guide for living a happy, meaningful life. The first three help us love God properly, and the other seven help us love other people the way God wants us to.",
                            pt: "Os Dez Mandamentos não são apenas regras - são o guia de Deus para viver uma vida feliz e significativa. Os três primeiros nos ajudam a amar Deus adequadamente, e os outros sete nos ajudam a amar outras pessoas da maneira que Deus quer.",
                            la: "Decem Praecepta non tantum regulae sunt - ducatus Dei sunt ad vitam felicem significativamque vivendam."
                        },
                        children: {
                            en: "God gave us ten special rules to help us be good and happy! The first three teach us how to love God, and the other seven teach us how to be kind to others. Following these rules helps us be the best we can be!",
                            pt: "Deus nos deu dez regras especiais para nos ajudar a ser bons e felizes! As três primeiras nos ensinam como amar Deus, e as outras sete nos ensinam como ser gentis com os outros. Seguir essas regras nos ajuda a ser o melhor que podemos ser!",
                            la: "Deus decem regulas speciales nobis dedit ut boni felicesque esse possimus!"
                        }
                    }
                }
            ]
        },
        4: {
            title: {
                en: "Christian Prayer",
                pt: "A Oração Cristã",
                la: "Oratio Christiana"
            },
            description: {
                en: "How we pray - The Our Father and forms of prayer",
                pt: "Como oramos - O Pai Nosso e formas de oração",
                la: "Quomodo oramus - Pater Noster et formae orationis"
            },
            sections: [
                {
                    id: "s4-1",
                    title: {
                        en: "What is Prayer?",
                        pt: "O que é Oração?",
                        la: "Quid est Oratio?"
                    },
                    content: {
                        adults: {
                            en: "Prayer is the raising of one's mind and heart to God or the requesting of good things from God. It is a vital and personal relationship with the living and true God.",
                            pt: "A oração é a elevação da mente e do coração a Deus ou o pedido de coisas boas a Deus. É uma relação vital e pessoal com o Deus vivo e verdadeiro.",
                            la: "Oratio est elevatio mentis et cordis ad Deum vel petitio bonorum a Deo. Est relatio vitalis et personalis cum Deo vivo et vero."
                        },
                        teens: {
                            en: "Prayer is basically talking to God - sharing your thoughts, feelings, thanks, and requests with Him. It's like having a conversation with your best friend who always listens and cares about you.",
                            pt: "A oração é basicamente falar com Deus - compartilhar seus pensamentos, sentimentos, agradecimentos e pedidos com Ele. É como ter uma conversa com seu melhor amigo que sempre escuta e se importa com você.",
                            la: "Oratio fundamentaliter est colloquium cum Deo - communicatio cogitationum, sensuum, gratiarum, et petitionum cum Eo."
                        },
                        children: {
                            en: "Prayer is talking to God! You can tell God anything - when you're happy, sad, scared, or thankful. God always listens to you and loves to hear from you, just like a loving parent!",
                            pt: "Oração é falar com Deus! Você pode contar tudo para Deus - quando está feliz, triste, com medo ou agradecido. Deus sempre te escuta e ama ouvir de você, como um pai amoroso!",
                            la: "Oratio est colloquium cum Deo! Omnia Deo dicere potes - cum laetus es, tristis, timidus, vel gratus."
                        }
                    }
                },
                {
                    id: "s4-2",
                    title: {
                        en: "The Our Father",
                        pt: "O Pai Nosso",
                        la: "Pater Noster"
                    },
                    content: {
                        adults: {
                            en: "The Lord's Prayer is truly the summary of the whole gospel. When Jesus gave us the Our Father, he taught us not only how to ask, but also how to receive what we need.",
                            pt: "A Oração do Senhor é verdadeiramente o resumo de todo o evangelho. Quando Jesus nos deu o Pai Nosso, ele nos ensinou não apenas como pedir, mas também como receber o que precisamos.",
                            la: "Oratio Domini vere est summarium totius evangelii. Cum Iesus nobis Pater Noster dedit, nos docuit non solum quomodo petere, sed etiam quomodo recipere quae opus habemus."
                        },
                        teens: {
                            en: "The Our Father is the perfect prayer that Jesus himself taught us. It covers everything we need: praising God, asking for our needs, seeking forgiveness, and protection from evil.",
                            pt: "O Pai Nosso é a oração perfeita que o próprio Jesus nos ensinou. Ela cobre tudo que precisamos: louvar Deus, pedir nossas necessidades, buscar perdão e proteção do mal.",
                            la: "Pater Noster est perfecta oratio quam ipse Iesus nos docuit."
                        },
                        children: {
                            en: "Jesus taught us a special prayer called the Our Father. It's like a perfect recipe for talking to God - we praise Him, ask for what we need, say sorry, and ask Him to keep us safe!",
                            pt: "Jesus nos ensinou uma oração especial chamada Pai Nosso. É como uma receita perfeita para falar com Deus - nós O louvamos, pedimos o que precisamos, pedimos desculpas e pedimos para Ele nos manter seguros!",
                            la: "Iesus nos orationem specialem docuit quae Pater Noster appellatur."
                        }
                    }
                },
                {
                    id: "s4-3",
                    title: {
                        en: "Forms of Prayer",
                        pt: "Formas de Oração",
                        la: "Formae Orationis"
                    },
                    content: {
                        adults: {
                            en: "There are five basic forms of prayer: blessing and adoration, petition, intercession, thanksgiving, and praise. Each expresses a different aspect of our relationship with God.",
                            pt: "Há cinco formas básicas de oração: bênção e adoração, petição, intercessão, ação de graças e louvor. Cada uma expressa um aspecto diferente de nossa relação com Deus.",
                            la: "Quinque formae fundamentales orationis sunt: benedictio et adoratio, petitio, intercessio, gratiarum actio, et laus."
                        },
                        teens: {
                            en: "Prayer isn't just asking for stuff! We can praise God for who He is, thank Him for what He's done, ask for help, pray for others, and simply worship Him because He's awesome.",
                            pt: "Oração não é apenas pedir coisas! Podemos louvar Deus por quem Ele é, agradecê-Lo pelo que fez, pedir ajuda, orar pelos outros, e simplesmente adorá-Lo porque Ele é incrível.",
                            la: "Oratio non est tantum petere res! Deum laudare possumus propter quem est."
                        },
                        children: {
                            en: "There are lots of ways to pray! We can say 'Thank you, God!' for good things, ask God to help people, tell God how wonderful He is, and ask for what we need. God loves all our prayers!",
                            pt: "Há muitas maneiras de orar! Podemos dizer 'Obrigado, Deus!' pelas coisas boas, pedir a Deus para ajudar as pessoas, dizer a Deus como Ele é maravilhoso, e pedir o que precisamos. Deus ama todas as nossas orações!",
                            la: "Multi modi orandi sunt! 'Gratias tibi, Deus!' dicere possumus pro rebus bonis."
                        }
                    }
                }
            ]
        }
    }
};

// Additional content can be expanded here
const additionalSections = {
    virtues: {
        title: {
            en: "The Virtues",
            pt: "As Virtudes",
            la: "Virtutes"
        },
        cardinal: [
            {
                name: { en: "Prudence", pt: "Prudência", la: "Prudentia" },
                description: {
                    en: "The virtue that disposes practical reason to discern our true good in every circumstance and to choose the right means of achieving it.",
                    pt: "A virtude que dispõe a razão prática a discernir nosso verdadeiro bem em toda circunstância e a escolher os meios certos de alcançá-lo.",
                    la: "Virtus quae rationem practicam disponit ad discernendum verum bonum nostrum in omni circumstantia."
                }
            },
            {
                name: { en: "Justice", pt: "Justiça", la: "Iustitia" },
                description: {
                    en: "The moral virtue that consists in the constant and firm will to give their due to God and neighbor.",
                    pt: "A virtude moral que consiste na vontade constante e firme de dar a Deus e ao próximo o que lhes é devido.",
                    la: "Virtus moralis quae in constanti ac firma voluntate consistit suum cuique tribuendi."
                }
            }
        ]
    }
};
