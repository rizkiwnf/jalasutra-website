import NewsHero from "../components/NewsHero"
import NewsSlider from "../components/NewsSlider"
import NewsList from "../components/NewsList"
import Image from "../assets/images/news-banner-1.jpeg"
import Pic1 from "../assets/images/banner-1.jpg"
import Pic2 from "../assets/images/banner-2.jpg"
import Pic3 from "../assets/images/banner-3.jpg"

export default function News() {
    let Desc = "Ad irure eiusmod et do. Quis labore aliquip aliqua sint laborum elit. Enim minim irure in et consectetur commodo voluptate laboris.Nostrud qui est adipisicing ad. Voluptate occaecat nulla aliqua mollit nulla id cillum ut eiusmod. Voluptate consectetur amet laboris quis veniam excepteur ut. Incididunt pariatur ut ut enim irure elit aliqua veniam laboris ut labore. Deserunt sint enim laborum labore. Ut aute enim eiusmod aliquip eiusmod magna ipsum enim anim et culpa eu anim ullamco.";
    let News = [
        {
            title: "Elit anim reprehenderit ut officia.",
            pic: Pic1,
            content: "Lorem minim aliqua mollit consequat nostrud fugiat aute veniam ex voluptate sunt nostrud velit ipsum. Ut minim dolor eu ex velit enim. Est esse labore excepteur sit. Anim in adipisicing pariatur occaecat esse eiusmod eu aliqua voluptate cupidatat aute proident.",
        },
        {
            title: "Eiusmod consectetur non commodo ad.",
            pic: Pic2,
            content: "Ex tempor voluptate mollit qui velit enim veniam Lorem dolor est consequat veniam ad consequat. Nulla in consectetur adipisicing esse irure enim mollit duis laboris anim aliquip. Non deserunt est deserunt sit do incididunt voluptate tempor.",
        },
        {
            title: "Excepteur culpa laborum est occaecat ullamco sunt qui ex.",
            pic: Pic3,
            content: "Cupidatat anim velit culpa cillum enim in consectetur Lorem id eiusmod ipsum quis dolor. Labore occaecat aliquip sit eu ea do fugiat occaecat ipsum qui ut. Nulla occaecat officia quis deserunt velit minim aute non dolor ea dolore. Minim ullamco eu dolor cupidatat incididunt voluptate deserunt.",
        },
        {
            title: "Elit anim reprehenderit ut officia.",
            pic: Pic1,
            content: "Lorem minim aliqua mollit consequat nostrud fugiat aute veniam ex voluptate sunt nostrud velit ipsum. Ut minim dolor eu ex velit enim. Est esse labore excepteur sit. Anim in adipisicing pariatur occaecat esse eiusmod eu aliqua voluptate cupidatat aute proident.",
        },
        {
            title: "Eiusmod consectetur non commodo ad.",
            pic: Pic2,
            content: "Ex tempor voluptate mollit qui velit enim veniam Lorem dolor est consequat veniam ad consequat. Nulla in consectetur adipisicing esse irure enim mollit duis laboris anim aliquip. Non deserunt est deserunt sit do incididunt voluptate tempor.",
        },
        {
            title: "Excepteur culpa laborum est occaecat ullamco sunt qui ex.",
            pic: Pic3,
            content: "Cupidatat anim velit culpa cillum enim in consectetur Lorem id eiusmod ipsum quis dolor. Labore occaecat aliquip sit eu ea do fugiat occaecat ipsum qui ut. Nulla occaecat officia quis deserunt velit minim aute non dolor ea dolore. Minim ullamco eu dolor cupidatat incididunt voluptate deserunt.",
        },
    ];
    return (
        <main className="w-3/4 mx-auto my-5 rounded-xl bg-white">
            <ul className="flex flex-wrap justify-center items-center mb-0 text-xs font-bold text-center text-gray-500 dark:text-gray-400">
                <li className="mx-5">
                    <a href="/" className="inline-block px-4 py-3 text-white bg-blue-600 rounded-full active" aria-current="page">SEMUA</a>
                </li>
                <li className="mx-5">
                    <a href="/" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">KESEHATAN</a>
                </li>
                <li className="mx-5">
                    <a href="/" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">PEMERINTAHAN</a>
                </li>
                <li className="mx-5">
                    <a href="/" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">SOSIAL</a>
                </li>
                <li className="mx-5">
                    <a href="/" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">EKONOMI</a>
                </li>
            </ul>
            <hr className="w-auto h-1 mx-auto bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
            <div className="p-4"> {/* w-full m-auto */}
                <NewsHero image={Image} description={Desc} />
                <NewsSlider list={News} />
                <NewsList list={News} />
            </div>
        </main>
    )
}