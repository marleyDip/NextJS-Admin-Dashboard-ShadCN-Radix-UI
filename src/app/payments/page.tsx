import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
    return [
        {
            id: "728ed521",
            amount: 134,
            status: "pending",
            username: "Md Sofian Hasan",
            email: "sofian.hasan@gmail.com"
        },
        {
            id: "728ed522",
            amount: 124,
            status: "success",
            username: "Arif Hossain",
            email: "arif.hossain@gmail.com"
        },
        {
            id: "728ed523",
            amount: 167,
            status: "failed",
            username: "Nusrat Jahan",
            email: "nusrat.jahan@gmail.com"
        },
        {
            id: "728ed524",
            amount: 145,
            status: "pending",
            username: "Tanvir Ahmed",
            email: "tanvir.ahmed@gmail.com"
        },
        {
            id: "728ed525",
            amount: 190,
            status: "failed",
            username: "Shaila Akter",
            email: "shaila.akter@gmail.com"
        },
        {
            id: "728ed526",
            amount: 210,
            status: "success",
            username: "Raihan Chowdhury",
            email: "raihan.chowdhury@gmail.com"
        },
        {
            id: "728ed527",
            amount: 98,
            status: "pending",
            username: "Labiba Rahman",
            email: "labiba.rahman@gmail.com"
        },
        {
            id: "728ed528",
            amount: 132,
            status: "success",
            username: "Imran Khan",
            email: "imran.khan@gmail.com"
        },
        {
            id: "728ed529",
            amount: 178,
            status: "failed",
            username: "Fatema Begum",
            email: "fatema.begum@gmail.com"
        },
        {
            id: "728ed530",
            amount: 145,
            status: "pending",
            username: "Sabbir Hossain",
            email: "sabbir.hossain@gmail.com"
        },
        {
            id: "728ed531",
            amount: 123,
            status: "success",
            username: "Tania Islam",
            email: "tania.islam@gmail.com"
        },
        {
            id: "728ed532",
            amount: 187,
            status: "success",
            username: "Rashedul Karim",
            email: "rashedul.karim@gmail.com"
        },
        {
            id: "728ed533",
            amount: 160,
            status: "pending",
            username: "Nusrat Khanam",
            email: "nusrat.khanam@gmail.com"
        },
        {
            id: "728ed534",
            amount: 135,
            status: "success",
            username: "Shakib Al Hasan",
            email: "shakib.alhasan@gmail.com"
        },
        {
            id: "728ed535",
            amount: 195,
            status: "success",
            username: "Anika Sultana",
            email: "anika.sultana@gmail.com"
        },
        {
            id: "728ed536",
            amount: 110,
            status: "pending",
            username: "Fahim Rahman",
            email: "fahim.rahman@gmail.com"
        },
        {
            id: "728ed537",
            amount: 142,
            status: "success",
            username: "Samira Akter",
            email: "samira.akter@gmail.com"
        },
        {
            id: "728ed538",
            amount: 170,
            status: "success",
            username: "Rony Chowdhury",
            email: "rony.chowdhury@gmail.com"
        },
        {
            id: "728ed539",
            amount: 150,
            status: "pending",
            username: "Farhana Karim",
            email: "farhana.karim@gmail.com"
        },
        {
            id: "728ed540",
            amount: 125,
            status: "success",
            username: "Joynal Abedin",
            email: "joynal.abedin@gmail.com"
        },
        {
            id: "728ed541",
            amount: 185,
            status: "success",
            username: "Mousumi Rahman",
            email: "mousumi.rahman@gmail.com"
        },
        {
            id: "728ed542",
            amount: 140,
            status: "pending",
            username: "Rafiq Ahmed",
            email: "rafiq.ahmed@gmail.com"
        },
        {
            id: "728ed543",
            amount: 155,
            status: "success",
            username: "Salma Akter",
            email: "salma.akter@gmail.com"
        },
        {
            id: "728ed544",
            amount: 180,
            status: "success",
            username: "Tariq Hossain",
            email: "tariq.hossain@gmail.com"
        },
        {
            id: "728ed545",
            amount: 130,
            status: "pending",
            username: "Rumana Begum",
            email: "rumana.begum@gmail.com"
        },
        {
            id: "728ed546",
            amount: 165,
            status: "success",
            username: "Fahad Chowdhury",
            email: "fahad.chowdhury@gmail.com"
        },
        {
            id: "728ed547",
            amount: 200,
            status: "success",
            username: "Nabila Khan",
            email: "nabila.khan@gmail.com"
        },
        {
            id: "728ed548",
            amount: 120,
            status: "pending",
            username: "Rashidul Islam",
            email: "rashidul.islam@gmail.com"
        },
        {
            id: "728ed549",
            amount: 138,
            status: "success",
            username: "Shamima Rahman",
            email: "shamima.rahman@gmail.com"
        },
        {
            id: "728ed550",
            amount: 175,
            status: "success",
            username: "Aminul Haque",
            email: "aminul.haque@gmail.com"
        },
        {
            id: "728ed551",
            amount: 145,
            status: "pending",
            username: "Nafisa Akter",
            email: "nafisa.akter@gmail.com"
        },
        {
            id: "728ed552",
            amount: 160,
            status: "success",
            username: "Saifur Rahman",
            email: "saifur.rahman@gmail.com"
        },
        {
            id: "728ed553",
            amount: 190,
            status: "success",
            username: "Fariha Khanam",
            email: "fariha.khanam@gmail.com"
        },
    ]
}


const PaymentsPage = async () => {
    const data = await getData();

    return (
        <div className="">
            <div className="px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">
                    All Payments
                </h1>
            </div>

            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default PaymentsPage;