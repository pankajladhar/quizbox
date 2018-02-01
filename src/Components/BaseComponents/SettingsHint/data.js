const data = [
    {
        "stepName": "Quiz title",
        "isMandatory": false,
        "description": "This is will be shown in header. It is optional, can be empty. In case of empty it will show  Quizbox"
    },
    {
        "stepName": "Question url",
        "isMandatory": true,
        "description": "This will be used to fetch questions. This must be a public URL.",
        "subDescription" : [
            "github can be used to create a public URL.(/configure/github) [Click Here]",
            "<a href='./Sample.json' download>Download Sample</a>"
        ]
    },
    {
        "stepName": "No of questions",
        "isMandatory": true,
        "description": "This is will be used to get total questions. ex: If you have 100 questions and you want to get only 10 questions at a time give 10"
    },
    {
        "stepName": "Points of per question",
        "isMandatory": true,
        "description": "This is will be used to calculate score."
    },
    {
        "stepName": "Author Name",
        "isMandatory": false,
        "description": "This is will be shown in header as well as in sample tab. It is optional, can be empty. In case of empty it will show anything"
    },
]

export default data;