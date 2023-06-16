import { config } from "@/config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";


const getDetails = async () => {
    return axios
        .get(`${config.SERVER_URL}/details`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useGetDetails = () => {
    return useQuery(["details"], getDetails);
};


const update = async ({ payload }) => {
    return axios
        .put(`${config.SERVER_URL}/details`, payload)
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useUpdateDetails = () => {
    const queryClient = useQueryClient()
    return useMutation(update, {
        onSuccess: (data) => {
            console.log(data)
            if(data?.status === "ok"){
                toast.success(data?.msg);
            } else {
                toast.warn(data?.msg)
            }
            queryClient.invalidateQueries({queryKey: ["details"]})
        },
        onError: (data) => {
            toast.error(data?.msg);
        },
    });
};