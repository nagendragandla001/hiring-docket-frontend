import { Spin } from "antd";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import JobList from "../components/jobs";
import { JobsInfo } from "../services/job-service";

const Jobs = (): JSX.Element => {
    const [jobs, setJobs] = useState([]);
    const fetchJobsData = async () => {
        const jobsApi = await JobsInfo();
        if ([200, 201, 202].includes(jobsApi.status)) {
            console.log("---- JOBS --- ", jobsApi.data);
            setJobs(jobsApi.data);
        }
    }
    useEffect(() => {
        fetchJobsData();
    }, []);
    return (
        <div className="container p-top-1">
            {
                jobs.length > 0 ? <JobList jobs={jobs} /> : null
            }
            {
                jobs.length === 0 ? <Spin /> : null
            }
        </div>
    )
}

export default Jobs;