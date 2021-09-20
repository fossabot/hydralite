<script>
    import ProtectedRoute from "$lib/components/Home/ProtectedRoute.svelte";
    import Skeleton from "$lib/components/Skeleton/Skeleton.svelte";
    import Tabs from "$lib/components/createProject/Tabs.svelte";
</script>
<ProtectedRoute>
    <Skeleton>
        <div class="w-screen h-[calc(100vh-50px)] flex items-center mt-5 justify-start flex-col gap-8">
            <h1 class="text-3xl font-bold text-black dark:text-white">
                Create a new <span class="text-dark-color-accent">project</span>
            </h1>
            <Tabs />
            <div class="bg-dark-bgMuted2 w-[80%] h-[40%] rounded-2xl shadow-lg mt-6 p-6">
                <h1 class="font-semibold text-black dark:text-white font-montserrat text-2xl">Import an existing repository</h1>
                <h6 class="font-normal mt-2 text-black dark:text-white">
                    Don’t have a repository? We’ll create one for you, so you can <span class="text-dark-color-accent">skip this step.</span>
                </h6>
            </div>
        </div>
    </Skeleton>
</ProtectedRoute>