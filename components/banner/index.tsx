// import { useRouter } from "next/router";
// import classnames from "classnames";
import Lottie from "react-lottie";
import animationData from "./animationData.json";
import Button from '../Button';

export function Banner() {
    // const router = useRouter();
    // const { walletAddress } = useAppWallet();
    // const { connect } = useConnect();

    return (
        <div className="relative bg-[#5D536B] md:h-[100vh]">
            <Lottie
                options={{
                    animationData,
                }}
            />
            <div className="absolute bottom-3 md:bottom-6 xl:bottom-12 w-full">
                <div className="w-full flex justify-center">
                    <Button />

                </div>
            </div>
        </div>
    );
}

