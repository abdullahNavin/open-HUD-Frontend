import useAuthContext from "../Hooks/useAuthContext";
import { ConfigProvider, Modal } from 'antd';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../Firebase/firebase.config";
import { toast } from "sonner";

const Signin = () => {
    const { open, setOpen } = useAuthContext();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                if (result.user.email) {
                    setOpen(false);
                    toast.success('Sign in successful');
                }
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })
    }
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextHeading: '#0ff',  // title color
                    colorText: '#0ff',         // body text
                    colorIcon: '#0ff',         // close icon
                    colorIconHover: '#0cc',    // close icon hover
                    boxShadow: '0 0px 15px #0ff',
                },
                components: {
                    Modal: {
                        contentBg: 'black',   // modal content background
                        headerBg: 'black',    // modal header background
                    },
                },
            }}
        >
            <Modal
                title="Sign in to your account"
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div className="py-5 px-7">
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center gap-2 border border-gray-500 rounded-full px-4 py-2 hover:shadow-lg  transition duration-300 w-full cursor-pointer hover:border-[#0cc]" >
                        <FcGoogle className="text-xl" />
                        Sign in with Google
                    </button>
                </div>
            </Modal>
        </ConfigProvider>
    );
};

export default Signin;
