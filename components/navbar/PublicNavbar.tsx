import { Button, Col, Menu, Row, Space, Typography } from "antd";
import Link from "next/link";

const PublicNavbar = (): JSX.Element => {

    return (
        <Row justify="space-between" align="middle">
            <Col>
                {/* <Link href="/"> */}
                <Typography.Title level={4}>Hiring Docket</Typography.Title>
                {/* </Link> */}
            </Col>
            <Col>
                <Space>
                    <Button>About</Button>
                    <Button>Premium Plans</Button>
                </Space>
            </Col>
        </Row>
    )
}

export default PublicNavbar;