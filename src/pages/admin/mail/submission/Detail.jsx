import AdminHeader from "../../../../components/AdminHeader";

export default function DetailMail() {
    return (
        <main>
            <AdminHeader title="Detail Surat" />
            <div className="w-full mx-auto bg-white rounded-lg">
                <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="detail-tab" data-tabs-toggle="#default" role="tablist">
                        <li class="me-2" role="presentation">
                            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="edit-tab" data-tabs-target="#edit" type="button" role="tab" aria-controls="edit" aria-selected="false">Edit</button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                        </li>
                    </ul>
                </div>
                <div id="default">
                    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="detail" role="tabpanel" aria-labelledby="detail-tab">
                        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="edit" role="tabpanel" aria-labelledby="edit-tab">
                        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}