import { config } from "@/config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";


const getCompetitions = async () => {
    return axios
        .get(`${config.SERVER_URL}/competition`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useGetCompetitions = () => {
    return useQuery(["competitions"], getCompetitions);
};


const create = async ({ payload }) => {
    return axios
        .post(`${config.SERVER_URL}/competition`, payload)
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useCompetition = () => {
    const queryClient = useQueryClient()
    return useMutation(create, {
        onSuccess: (data) => {
            console.log(data)
            if(data?.status === "ok"){
                toast.success(data?.message);
            } else {
                toast.warn(data?.message)
            }
            queryClient.invalidateQueries({queryKey: ["competitions"]})
        },
        onError: (data) => {
            toast.error(data?.message);
        },
    });
};