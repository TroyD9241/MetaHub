import { useState } from "react";
import SignUpModal from "./SignupModal";
import LoginModal from "./LoginModal";

const user = {
    userName: "demo",
    pfp: "https://cdn131.picsart.com/349218956014201.jpg"
}

const Navbar = () => {
    const [userState, setUserState] = useState(user)
    return (
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-none">
            <div class="flex-none hidden lg:flex">
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" class="m-1 btn"><i class="fas fa-caret-down"></i></div>
                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <li>

                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex-1 hidden px-2 mx-2 lg:flex">
                <span class="text-lg font-bold">
                    MetaHub
                </span>
            </div>
            <div class="flex-1 lg:flex-none">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-ghost" />
                </div>
            </div>
            <div class="flex-none">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
            <div class="flex-none">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                </button>
            </div>
            {userState &&
                <div class="flex-none">
                    <div class="avatar">
                        <div class="rounded-full w-12 h-12 m-1">
                            <img src={userState.pfp}></img>
                        </div>
                    </div>
                </div>
            }
            {!userState &&
                <LoginModal />
            }
            {!userState &&
                <SignUpModal />}
        </div >
    );
};

export default Navbar;
