/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { serverUrl } from '~/constants/global';
import { DiscordIcon, GithubIcon, GoogleIcon, TwitterIcon } from "../Icon";

const LoginButton = ({ icon, title, provider }) => {
    const wrapper = { icon };
    return (
        <button
            className="flex items-center justify-center px-4 py-4 rounded-2xl hover:bg-white-selected bg-white-hover my-1 font-bold text-3xl text-text bg-dark-grey hover:bg-dark-textMuted duration-300 focus:ring-2 focus:ring-offset-5 focus:outline-none focus:from-dark-color-accent"
            onClick={async () => {
                const url = await fetch(`${serverUrl}/api/auth/${provider}`)
                    .then((v) => v.json())
                    .then((v) => v.url);
                window.location.href = url;
            }}
        >
            <div style={{ width: 20, height: 20, marginRight: 20 }}>
                <wrapper.icon />
            </div>
            <div className="text-lg">{title}</div>
        </button>
    );
};

export default function Example() {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                auto-reopen="true"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-10 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <div className="mt-3 text-center sm:my-5">
                                    <Dialog.Title as="h3" className="text-3xl leading-6 text-gray-900 font-bold">
                                        Join <span className="text-dark-color-accent">Hydralite</span> with...
                                    </Dialog.Title>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-2 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-2 sm:grid-flow-row-dense">
                                <LoginButton icon={GoogleIcon} title="Google" provider="google" />
                                <LoginButton icon={GithubIcon} title="Github" provider="github" />
                                <LoginButton icon={TwitterIcon} title="Twitter" provider="twitter" />
                                <LoginButton icon={DiscordIcon} title="Discord" provider="discord" />
                            </div>
                            <div className="w-100 flex align-middle mt-3">
                                <p>By Joining you accept our
                                <span className="text-accent font-bold"> Terms and Conditions</span> and <span className="text-accent font-bold">Privacy Policy</span></p>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
