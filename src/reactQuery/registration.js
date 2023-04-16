import { config } from "@/config";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const create = async ({ payload }) => {
    return axios
        .post(`${config.SERVER_URL}/registration`, payload)
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useRegister = () => {
    return useMutation(create, {
        onSuccess: (data) => {
            console.log(data)
            if(data?.data?.status === "ok"){
                toast.success(data?.data?.message);
            } else {
                toast.warn(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message);
        },
    });
};
