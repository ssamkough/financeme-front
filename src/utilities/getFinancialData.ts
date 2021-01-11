const getFinancialData = () => {
    // line data
    const line = [
        { Date: "2020-12-01", Money: 100 },
        { Date: "2020-12-04", Money: 200 },
        { Date: "2020-12-07", Money: 300 },
        { Date: "2020-12-11", Money: 400 },
        { Date: "2020-12-15", Money: 100 },
        { Date: "2020-12-18", Money: 200 },
        { Date: "2020-12-20", Money: 300 },
        { Date: "2020-12-22", Money: 400 },
        { Date: "2020-12-26", Money: 300 },
        { Date: "2020-12-30", Money: 400 },
    ]

    // wave data
    const wave = 0.25

    // pie data
    const pie = [
        { type: "Classification One", value: 27 },
        { type: "Class 2", value: 25 },
        { type: "Classification Three", value: 18 },
        { type: "Classification Four", value: 15 },
        { type: "Classification Five", value: 10 },
        { type: "Other", value: 5 }
    ]

    return {line: line, wave: wave, pie: pie};
}

export default getFinancialData;