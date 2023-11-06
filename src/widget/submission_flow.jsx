const SubmissionFlow = () => {

    let List = [
        {
            title: "Langkah 1",
            subtitle: "Lorem ipsum dolor sit amet",
            description: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            title: "Langkah 2",
            subtitle: "Lorem ipsum dolor sit amet",
            description: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            title: "Langkah 3",
            subtitle: "Lorem ipsum dolor sit amet",
            description: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            title: "Langkah 4",
            subtitle: "Lorem ipsum dolor sit amet",
            description: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
    ]
    return (
        <div className="submission-flow mx-6 w-screen">
            <div className="service my-16">
                <div className="container mx-auto ">
                    <div className="serv-title">
                        <p className="text-center md:text-left text-2xl md:text-4xl font-bold">
                            Alur Pengajuan
                        </p>
                    </div>
                    <div className="flex lg:flex-row mt-16 justify-center md:justify-around lg:justify-between flex-wrap">
                        {List.map((step) => (
                            <div className="step flex flex-col w-64 mb-4">
                                <div className="field flex flex-col gap-2 border shadow-lg rounded-xl p-4">
                                    <p className="title text-xl font-bold text-center">
                                        {step.title}
                                    </p>
                                    <p className="sub-title text-center font-semibold">
                                        {step.subtitle}
                                    </p>
                                    <p className="description text-xs text-justify">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default SubmissionFlow;