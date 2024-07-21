

const GenerateHellowWorld = () => {

    const Message = () => {
        return "Bismillah kamu bisa"
    }

    return(
        <div>
            <h2>Fahmi Hidayat, {Message()}</h2>
            <Message/>
        </div>
    )
}

export default GenerateHellowWorld;