const questions = {
    "detail": {
        "name": "Application assessment questions",
        "version": 1.0,
        "description": "Application questions to inform Platform choices/comparisons.",
        "domain": "",
        "updated": "2023-09-06",
        "author": "Simon J. Hogan",
        "comments": [
            {"date": "2023-09-06", "note": "Draft version created."}
        ]
    },
    "security": {
        "risk": [
            "What is the risk associated with this application (i.e Data location, Privacy, Classification), please provide a percentage?",
            "%",
            5
        ],
        "cost": [
            "What is the expected approximate initial cost for security compliance/testing?",
            "$",
            10000

        ],
        "recovery": [
            "What is the expected effort required for disaster recovery, please provide a percentage?",
            "%",
            50

        ],
        "ongoing": [
            "What is the expected approximate ongoing cost for security compliance/monitoring per year?",
            "$",
            1000
        ]
    },
    "design": {
        "customisation": [
            "Customisation is required for branding/accessability beyond what is provided out of the box.",
            "!",
            true
        ],
        "accesability": [
            "Full accessability is required.",
            "!",
            true
        ],
        "mobile": [
            "A Mobile interface is required?",
            "!",
            true
        ],
        "public": [
            "Application must provide a secure pulbic user interface?",
            "!",
            true
        ]
    },
    "complexity": {
        "screens": [
            "Approximate number of interface screens used in the Application?",
            "n",
            50
        ],
        "workflow": [
            "Approximate number of workflows/processes used in the Application?",
            "n",
            50
        ],
        "reports": [
            "Approximate number of business reports/views used in the Application?",
            "n",
            50
        ],
        "services": [
            "Approximate number of services/interfaces used in the Application?",
            "n",
            50
        ],
        "unknown": [
            "Approximate number of unknown features/plugins used in the Application?",
            "n",
            10
        ]
    },
    "support": {
        "external": [
            "Does the Application require an external service provider for support?",
            "!",
            false
        ],
        "priority": [
            "What is the expected level of priority on suport requests for this Application?",
            "%",
            10
        ],
        "end": [
            "Current platform support ends on this date.",
            "d",
            "2023-12-12"
        ]
    },
    "cost": {
        "developement": [
            "What are the approximate project development costs per hour?",
            "$",
            200
        ],
        "testing": [
            "What are the approximate project testing costs per hour?",
            "$",
            200
        ],
        "management": [
            "What are the approximate project management costs per hour?",
            "$",
            200
        ]
    }
}