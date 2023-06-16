import { config } from "@/config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
            if(data?.status === "ok"){
                toast.success(data?.msg);
            } else {
                toast.warn(data?.msg)
            }
        },
        onError: (data) => {
            toast.error(data?.msg);
        },
    });
};

const approve = async (id) => {
    return axios
        .put(`${config.SERVER_URL}/approve/${id}`)
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useApprovePayment = () => {
    const queryClient = useQueryClient()
    return useMutation(approve, {
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ["registrations"]})
            console.log(data, "return data")
            if(data?.status === "ok"){
                toast.success(data?.msg);
            } else {
                toast.warn(data?.msg)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.msg);
        },
    });
};


const getRegistrations = async () => {
    return axios
        .get(`${config.SERVER_URL}/registrations`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useGetRegistrations = () => {
    return useQuery(["registrations"], getRegistrations);
};



const getRegistrationById = async (id) => {
    return axios
        .get(`${config.SERVER_URL}/registrations/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useGetRegistrationById = (id) => {
    return useQuery(["registrations", id], () => getRegistrationById(id));
};
