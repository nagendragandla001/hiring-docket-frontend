import { Button, Card, Col, Row, Space, Typography } from "antd";
require('./jobs.less');

interface JobType {
    id: number;
    name: string;
    city: string;
    posted_on: string;
    posted_by: string;
    status: string;
}

type JobsType = {
    jobs: Array<JobType>
}

const { Text, Title } = Typography;

const JobList = (props: JobsType): JSX.Element => {
    const { jobs } = props;
    return (
        <Row gutter={[0, 16]} className="jobs-container">
            {
                jobs.map((job) => (
                    <Col span={16} key={job.id}>
                        <Card
                            className="job-card"
                        >
                            <Row gutter={[0, 10]}>
                                <Col span={24}>
                                    <Title className="p-all-0" level={5}>{job.name}</Title>
                                </Col>
                                <Col span={24} className="text-disabled">{job.city}</Col>
                                <Col span={24}>
                                    <Row gutter={[10, 0]}>
                                        <Col span={16}>
                                            <Space>
                                                <Button size="small" type="primary">Edit</Button>
                                                <Button size="small" type="primary">Share</Button>
                                            </Space>
                                        </Col>
                                        <Col span={8}>
                                            <Text className="text-small text-disabled">Posed on {job.posted_on} by {job?.posted_by}</Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default JobList;