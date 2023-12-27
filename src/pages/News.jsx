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
        <main className="w-3/4 mx-auto my-5 pt-4 rounded-xl bg-white">
            <ul className="flex flex-wrap justify-center items-center text-xs font-bold text-center text-gray-500 dark:text-gray-400" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="mx-5" role="presentation">
                    <button type="button" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" id="all-tab" data-tabs-target="#all" role="tab" aria-controls="all" aria-selected="false">SEMUA</button> {/* selected: text-white bg-blue-600  */}
                </li>
                <li className="mx-5" role="presentation">
                    <button type="button" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" id="kesehatan-tab" data-tabs-target="#kesehatan" role="tab" aria-controls="kesehatan" aria-selected="false">KESEHATAN</button>
                </li>
                <li className="mx-5" role="presentation">
                    <button type="button" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" id="pemerintahan-tab" data-tabs-target="#pemerintahan" role="tab" aria-controls="pemerintahan" aria-selected="false">PEMERINTAHAN</button>
                </li>
                <li className="mx-5" role="presentation">
                    <button type="button" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" id="sosial-tab" data-tabs-target="#sosial" role="tab" aria-controls="sosial" aria-selected="false">SOSIAL</button>
                </li>
                <li className="mx-5" role="presentation">
                    <button type="button" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" id="ekonomi-tab" data-tabs-target="#ekonomi" role="tab" aria-controls="ekonomi" aria-selected="false">EKONOMI</button>
                </li>
            </ul>
            <hr className="w-auto h-1 mx-auto bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
            <div className="p-4" id="default-tab-content"> {/* w-full m-auto */}
                <div className="hidden" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <NewsHero image={Image} description={Desc} />
                    <NewsSlider list={News} />
                    <NewsList list={News} />
                </div>
                <div className="hidden" id="kesehatan" role="tabpanel" aria-labelledby="kesehatan-tab">
                    <h1 className="font-bold capitalize">Kesehatan</h1>
                </div>
                <div className="hidden" id="pemerintahan" role="tabpanel" aria-labelledby="pemerintahan-tab">
                    <h1 className="font-bold capitalize">Pemerintahan</h1>
                </div>
                <div className="hidden" id="sosial" role="tabpanel" aria-labelledby="sosial-tab">
                    <h1 className="font-bold capitalize">Sosial</h1>
                </div>
                <div className="hidden" id="ekonomi" role="tabpanel" aria-labelledby="ekonomi-tab">
                    <h1 className="font-bold capitalize">Ekonomi</h1>
                </div>
            </div>
        </main>
    )
}