const platforms = [
    {
        "detail": {
            "name": "SharePoint Online/PowerPlatform",
            "id": 0,
            "description": "The Micorosft SharePoint online platform, with PowerApps.",
            "domain": "itd"
        },
        "security": {
            "risk": [
                5,
                "(%) Minimal risk as located on Australian data centers and certified by DSD."
            ],
            "cost": [
                5000,
                "($) Initial cost for security compliance/testing."
            ],
            "recovery": [
                25,
                "(%) Complexity of disaster recovery."
            ],
            "ongoing": [
                1000,
                "($) Ongoing cost for security compliance/monitoring per year."
            ]
        },
        "design": {
            "customisation": [
                false,
                "Customisation provided for branding/accessability beyond what is provided out of the box."
            ],
            "accesability": [
                true,
                "Full accessability is provided."
            ],
            "mobile": [
                true,
                "Mobile interface is provided."
            ],
            "public": [
                false,
                "Platform provides a secure pulbic user interface."
            ]
        },
        "complexity": {
            "screens": [
                25,
                "Platform provides an ability to create multiple screens within limits or data size."
            ],
            "workflow": [
                10,
                "Platform provides an ability to create multiple workflows via Power Automate, restricted by licencing."
            ],
            "reports": [
                50,
                "Platform provides an ability to create multiple reports via Power BI."
            ],
            "services": [
                0,
                "Limited ability to create service APIs without code."
            ],
            "unknown": [
                15,
                "Platform has some limitations around total records and archiving. which may intriduce complexity."
            ]
        },
        "support": {
            "external": [
                true,
                "Platform provides an external service provider for support."
            ],
            "priority": [
                50,
                "Platform provides this level of priority on suport requests."
            ],
            "end": [
                "2025-12-12",
                "Current platform support ends on this date."
            ]
        },
        "cost": {
            "licence": [
                200,
                "Approximate licence costs (hour)."
            ],
            "support": [
                100,
                "Approximate support costs (hour)."
            ],
            "purchase": [
                1000,
                "Approximate initial purchase costs (per user)."
            ],
            "developement": [
                100,
                "Approximate development costs per hour."
            ],
            "testing": [
                100,
                "Approximate testing costs per hour."
            ],
            "management": [
                100,
                "Approximate management costs per hour."
            ]
        }
    },
    {
        "detail": {
            "name": "Dynamics 365/PowerPlatform",
            "id": 0,
            "description": "The Micorosft Dynamics 365/PowerPlatform online platform.",
            "domain": ""
        },
        "security": {
            "risk": [
                10,
                "(%) Minimal risk as located on Australian data centers and certified by DSD."
            ],
            "cost": [
                10000,
                "($) Initial cost for security compliance/testing."
            ],
            "recovery": [
                60,
                "(%) Complexity of disaster recovery."
            ],
            "ongoing": [
                10000,
                "($) Ongoing cost for security compliance/monitoring per year."
            ]
        },
        "design": {
            "customisation": [
                false,
                "Customisation provided for branding/accessability beyond what is provided out of the box."
            ],
            "accesability": [
                false,
                "Full accessability is provided."
            ],
            "mobile": [
                true,
                "Mobile interface is provided."
            ],
            "public": [
                true,
                "Platform provides a secure pulbic user interface."
            ]
        },
        "complexity": {
            "screens": [
                100,
                ""
            ],
            "workflow": [
                100,
                ""
            ],
            "reports": [
                200,
                ""
            ],
            "services": [
                20,
                ""
            ],
            "unknown": [
                20,
                ""
            ]
        },
        "support": {
            "external": [
                true,
                "Platform provides an external service provider for support."
            ],
            "priority": [
                80,
                "Platform provides this level of priority on suport requests."
            ],
            "end": [
                "2025-12-12",
                "Current platform support ends on this date."
            ]
        },
        "cost": {
            "licence": [
                500,
                "Approximate licence costs."
            ],
            "support": [
                100,
                "Approximate support costs."
            ],
            "purchase": [
                1000,
                "Approximate initial purchase costs."
            ],
            "developement": [
                200,
                "Approximate development costs per hour."
            ],
            "testing": [
                200,
                "Approximate testing costs per hour."
            ],
            "management": [
                200,
                "Approximate management costs per hour."
            ]
        }
    }, {
        "detail": {
            "name": "Health Data Portal",
            "id": 0,
            "description": "The Micorosft SharePoint online platform.",
            "domain": ""
        },
        "security": {
            "risk": [
                5,
                "(%) Minimal risk as located on Australian data centers and certified by DSD."
            ],
            "cost": [
                10000,
                "($) Initial cost for security compliance/testing."
            ],
            "recovery": [
                70,
                "(%) Complexity of disaster recovery."
            ],
            "ongoing": [
                1000,
                "($) Ongoing cost for security compliance/monitoring per year."
            ]
        },
        "design": {
            "customisation": [
                false,
                "Customisation provided for branding/accessability beyond what is provided out of the box."
            ],
            "accesability": [
                true,
                "Full accessability is provided."
            ],
            "mobile": [
                false,
                "No mobile interface is provided."
            ],
            "public": [
                true,
                "Platform provides a secure pulbic user interface."
            ]
        },
        "complexity": {
            "screens": [
                10,
                ""
            ],
            "workflow": [
                0,
                ""
            ],
            "reports": [
                0,
                ""
            ],
            "services": [
                10,
                ""
            ],
            "unknown": [
                20,
                ""
            ]
        },
        "support": {
            "external": [
                false,
                "Platform provides an external service provider for support."
            ],
            "priority": [
                75,
                "Platform provides this level of priority on suport requests."
            ],
            "end": [
                "2025-12-12",
                "Current platform support ends on this date."
            ]
        },
        "cost": {
            "licence": [
                200,
                "Approximate licence costs."
            ],
            "support": [
                5000,
                "Approximate support costs."
            ],
            "purchase": [
                2000,
                "Approximate initial purchase costs."
            ],
            "developement": [
                200,
                "Approximate development costs per hour."
            ],
            "testing": [
                100,
                "Approximate testing costs per hour."
            ],
            "management": [
                100,
                "Approximate management costs per hour."
            ]
        }
    }, {
        "detail": {
            "name": "Salesforce",
            "id": 0,
            "description": "The Micorosft SharePoint online platform.",
            "domain": ""
        },
        "security": {
            "risk": [
                50,
                "(%) Minimal risk as located on Australian data centers and certified by DSD."
            ],
            "cost": [
                10000,
                "($) Initial cost for security compliance/testing."
            ],
            "recovery": [
                90,
                "(%) Complexity of disaster recovery."
            ],
            "ongoing": [
                10000,
                "($) Ongoing cost for security compliance/monitoring per year."
            ]
        },
        "design": {
            "customisation": [
                false,
                "Customisation provided for branding/accessability beyond what is provided out of the box."
            ],
            "accesability": [
                false,
                "Full accessability is provided."
            ],
            "mobile": [
                false,
                "Mobile interface is provided."
            ],
            "public": [
                true,
                "Platform provides a secure pulbic user interface."
            ]
        },
        "complexity": {
            "screens": [
                200,
                ""
            ],
            "workflow": [
                200,
                ""
            ],
            "reports": [
                200,
                ""
            ],
            "services": [
                200,
                ""
            ],
            "unknown": [
                50,
                ""
            ]
        },
        "support": {
            "external": [
                true,
                "Platform provides an external service provider for support."
            ],
            "priority": [
                90,
                "Platform provides this level of priority on suport requests."
            ],
            "end": [
                "2025-12-12",
                "Current platform support ends on this date."
            ]
        },
        "cost": {
            "licence": [
                20000,
                "Approximate licence costs."
            ],
            "support": [
                10000,
                "Approximate support costs."
            ],
            "purchase": [
                10000,
                "Approximate initial purchase costs."
            ],
            "developement": [
                250,
                "Approximate development costs per hour."
            ],
            "testing": [
                120,
                "Approximate testing costs per hour."
            ],
            "management": [
                150,
                "Approximate management costs per hour."
            ]
        }
    }, {
        "detail": {
            "name": "Custom Development (JAVA, .NET)",
            "id": 0,
            "description": "The Micorosft SharePoint online platform.",
            "domain": ""
        },
        "security": {
            "risk": [
                10,
                "(%) Minimal risk as located on Australian data centers and certified by DSD."
            ],
            "cost": [
                10000,
                "($) Initial cost for security compliance/testing."
            ],
            "recovery": [
                50,
                "(%) Complexity of disaster recovery."
            ],
            "ongoing": [
                1000,
                "($) Ongoing cost for security compliance/monitoring per year."
            ]
        },
        "design": {
            "customisation": [
                true,
                "Customisation provided for branding/accessability beyond what is provided out of the box."
            ],
            "accesability": [
                true,
                "Full accessability is provided."
            ],
            "mobile": [
                true,
                "Mobile interface is provided."
            ],
            "public": [
                true,
                "Platform provides a secure pulbic user interface."
            ]
        },
        "complexity": {
            "screens": [
                100,
                ""
            ],
            "workflow": [
                50,
                ""
            ],
            "reports": [
                100,
                ""
            ],
            "services": [
                100,
                ""
            ],
            "unknown": [
                20,
                ""
            ]
        },
        "support": {
            "external": [
                true,
                "Platform provides an external service provider for support."
            ],
            "priority": [
                50,
                "Platform provides this level of priority on suport requests."
            ],
            "end": [
                "2025-12-12",
                "Current platform support ends on this date."
            ]
        },
        "cost": {
            "licence": [
                2000,
                "Approximate licence costs."
            ],
            "support": [
                1000,
                "Approximate support costs."
            ],
            "purchase": [
                1000,
                "Approximate initial purchase costs."
            ],
            "developement": [
                100,
                "Approximate development costs per hour."
            ],
            "testing": [
                100,
                "Approximate testing costs per hour."
            ],
            "management": [
                100,
                "Approximate management costs per hour."
            ]
        }
    }
]