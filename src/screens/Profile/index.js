import React from 'react';
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Footer from "../../components/Footer";
import { Container, Row, Col, Card, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Profile = () => {
    const tabs = [
        {
            path: "/account",
            name: "User Profiles"
        },
        {
            path: "/account/security-settings",
            name: "Security Settings"
        },
        {
            path: "/account/kyc-verification",
            name: "Kyc Verification"
        },
        {
            path: "/account/basic-info",
            name: "Basic Information"
        },
    ]

    return (
        <div style={{ background: "#f3f3f3" }}>
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container className="profile__page__container">
                    <Row className="profile__page__container__first__row">
                        <Col md="3">
                            <Card body style={{ border: "none" }}>
                                <Row>
                                    <Col sm="4">
                                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA3ODwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxjaXJjbGUgaWQ9InBhdGgtMSIgY3g9IjMyIiBjeT0iMzIiIHI9IjMyIj48L2NpcmNsZT4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9Ii01LjQyOTUzOTg1JSIgeDI9IjUzLjI2MzAyMTMlIiB5Mj0iMTA5LjcwNzE1OCUiIGlkPSJsaW5lYXJHcmFkaWVudC0zIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0RERTNFQiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQkRDOUQ5IiBvZmZzZXQ9Ijk2Ljk2MDgwMiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBGN0RGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aCBkPSJNNDguMjkwOTIxNyw1MC41NDIzMiBMMzkuNjUxNjg3LDQ2LjMzOTQ0IEMzOC44MzY4Njk2LDQ1Ljk0MjU2IDM4LjMzMDQzNDgsNDUuMTQ1MjggMzguMzMwNDM0OCw0NC4yNTgyNCBMMzguMzMwNDM0OCw0MS4yODI5NiBDMzguNTM3NTMwNCw0MS4wMzY1NiAzOC43NTU0NzgzLDQwLjc1NTg0IDM4Ljk4MDY2MDksNDAuNDQ2MDggQzQwLjEwMTE0NzgsMzguOTA2MDggNDAuOTk5MTY1MiwzNy4xOTE4NCA0MS42NTIxMDQzLDM1LjM0Mjk2IEM0Mi45MjgxMzkxLDM0Ljc3MzYgNDMuNzU2NTIxNywzMy41NDYgNDMuNzU2NTIxNywzMi4xNiBMNDMuNzU2NTIxNywyOC42NCBDNDMuNzU2NTIxNywyNy43OTI1NiA0My40MzA5NTY1LDI2Ljk3MTUyIDQyLjg1MjE3MzksMjYuMzMgTDQyLjg1MjE3MzksMjEuNjQ5MjggQzQyLjkwMjgxNzQsMjEuMTY1MjggNDMuMTAxNzczOSwxOC4yODQxNiA0MC45NjAyNzgzLDE1LjkwNzI4IEMzOS4xMDI3NDc4LDEzLjg0NTQ0IDM2LjA4ODU1NjUsMTIuOCAzMiwxMi44IEMyNy45MTE0NDM1LDEyLjggMjQuODk3MjUyMiwxMy44NDU0NCAyMy4wMzk3MjE3LDE1LjkwNjQgQzIwLjg5ODIyNjEsMTguMjgzMjggMjEuMDk3MTgyNiwyMS4xNjUyOCAyMS4xNDc4MjYxLDIxLjY0OTI4IEwyMS4xNDc4MjYxLDI2LjMzIEMyMC41NjkwNDM1LDI2Ljk3MTUyIDIwLjI0MzQ3ODMsMjcuNzkyNTYgMjAuMjQzNDc4MywyOC42NCBMMjAuMjQzNDc4MywzMi4xNiBDMjAuMjQzNDc4MywzMy4yMzA5NiAyMC43NDM1ODI2LDM0LjIyOTc2IDIxLjU5NzI4NywzNC44OTU5MiBDMjIuNDI1NjY5NiwzOC4wODc2OCAyNC4xNTkzMDQzLDQwLjQ5MjcyIDI0Ljc2NTIxNzQsNDEuMjY0NDggTDI0Ljc2NTIxNzQsNDQuMTc2NCBDMjQuNzY1MjE3NCw0NS4wMjgyNCAyNC4yODc3MjE3LDQ1LjgwOTY4IDIzLjUxOTkzMDQsNDYuMjE4IEwxNS40NTIyNDM1LDUwLjUwMDA4IEMxMi44Mjg3MzA0LDUxLjg5MzEyIDExLjIsNTQuNTYzMDQgMTEuMiw1Ny40NzA1NiBMMTEuMiw2MC4zMiBDMTEuMiw2NC40OTY0OCAyNC44MDU5MTMsNjUuNiAzMiw2NS42IEMzOS4xOTQwODcsNjUuNiA1Mi44LDY0LjQ5NjQ4IDUyLjgsNjAuMzIgTDUyLjgsNTcuNjQyMTYgQzUyLjgsNTQuNjE2NzIgNTEuMDcxNzkxMyw1MS44OTU3NiA0OC4yOTA5MjE3LDUwLjU0MjMyIFoiIGlkPSJwYXRoLTQiPjwvcGF0aD4KICAgICAgICA8ZmlsdGVyIHg9Ii0zMy43JSIgeT0iLTE4LjklIiB3aWR0aD0iMTY3LjMlIiBoZWlnaHQ9IjE1My4wJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTUiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjE2MTQ1ODMzMyAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTc4Ij4KICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8ZyBpZD0iT3ZhbCIgZmlsbC1ydWxlPSJub256ZXJvIj48L2c+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTIpIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9IlBhdGgiIG1hc2s9InVybCgjbWFzay0yKSI+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItNSkiIHhsaW5rOmhyZWY9IiNwYXRoLTQiPjwvdXNlPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTQiPjwvdXNlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="Avatar" />
                                    </Col>
                                    <Col sm="8">
                                        <CardText>
                                            <p>Chirag Saini</p>
                                            <p>UID:12345678</p>
                                        </CardText>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Link to="/profile/kyc-verification">
                                <Card body inverse className="profile__page__first__row__first__card">
                                    <CardTitle>KYC Verification</CardTitle>
                                    <CardText>
                                        <p>Status: Unverified</p>
                                    </CardText>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="3">
                            <Link to="/profile/security">
                                <Card body inverse className="profile__page__first__row__second__card">
                                    <CardTitle>Account Security</CardTitle>
                                    <CardText>
                                        <p>Security Level: Low</p>
                                    </CardText>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="3">
                            <Link to="/profile/discount">
                                <Card body inverse className="profile__page__first__row__third__card">
                                    <CardTitle>Discount</CardTitle>
                                    <CardText>
                                        <p>Maker:0.1%, Taker:0.1%</p>
                                    </CardText>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="profile__page__container__second__row">
                        <Col md="4">
                            <Link>
                                <Card body style={{ background: "#f5f9fc", border: "none", borderRadius: "10px" }}>
                                    <Row>
                                        <Col xs="3">
                                            <i className="fas fa-envelope fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        </Col>
                                        <Col xs="9">
                                            <CardText>
                                                <p>Email <i className="fa fa-check" style={{ background: "lightgreen", borderRadius: "50%", fontSize: "0.875rem", padding: "5px" }}></i></p>
                                                <p>ab**@**l.com</p>
                                            </CardText>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="4">
                            <Link>
                                <Card body style={{ background: "#f5f9fc", border: "none", borderRadius: "10px" }}>
                                    <Row>
                                        <Col xs="3">
                                            <i className="fas fa-phone fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        </Col>
                                        <Col xs="9">
                                            <CardText>
                                                <p>Phone <i className="fa fa-times-circle" style={{ background: "lightsalmon", borderRadius: "50%", fontSize: "0.875rem", padding: "5px" }}></i></p>
                                                <p style={{ color: "red" }}>Disabled</p>
                                            </CardText>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="4">
                            <Link>
                                <Card body style={{ background: "#f5f9fc", border: "none", borderRadius: "10px" }}>
                                    <Row>
                                        <Col xs="3">
                                            <i className="fab fa-google fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        </Col>
                                        <Col xs="9">
                                            <CardText>
                                                <p>Google Verification <i className="fa fa-times-circle" style={{ background: "lightsalmon", borderRadius: "50%", fontSize: "0.875rem", padding: "5px" }}></i></p>
                                                <p style={{ color: "red" }}>Disabled</p>
                                            </CardText>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="4">
                            <Link>
                                <Card body style={{ background: "#f5f9fc", border: "none", borderRadius: "10px" }}>
                                    <Row>
                                        <Col xs="3">
                                            <i className="fas fa-plug fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        </Col>
                                        <Col xs="9">
                                            <CardText>
                                                <p>API <i className="fa fa-times-circle" style={{ background: "lightsalmon", borderRadius: "50%", fontSize: "0.875rem", padding: "5px" }}></i></p>
                                                <p >0 API Enabled</p>
                                            </CardText>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="4">
                            <Link>
                                <Card body style={{ background: "#f5f9fc", border: "none", borderRadius: "10px" }}>
                                    <Row>
                                        <Col xs="3">
                                            <i className="fas fa-key fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        </Col>
                                        <Col xs="9">
                                            <CardText>
                                                <p>Trading Password <i className="fa fa-times-circle" style={{ background: "lightsalmon", borderRadius: "50%", fontSize: "0.875rem", padding: "5px" }}></i></p>
                                                <p style={{ color: "red" }}>Disabled</p>
                                            </CardText>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="4">
                            <Link>
                                <Card body style={{ background: "#f5f9fc", border: "none", borderRadius: "10px" }}>
                                    <Row>
                                        <Col xs="3">
                                            <i className="fas fa-dollar-sign fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        </Col>
                                        <Col xs="9">
                                            <CardText>
                                                <p>Withdrawl Limit <i className="fa fa-times-circle" style={{ background: "lightsalmon", borderRadius: "50%", fontSize: "0.875rem", padding: "5px" }}></i></p>
                                                <p >24H max. 99999BTC</p>
                                            </CardText>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container className="profile__page__second__container">
                    <Row style={{ background: "#f5f8f9", padding: "10px" }}>
                        Recent Login
                </Row>
                    <Row style={{ padding: "10px" }} >
                        <div className="profile__page__login__history">
                            <span>Login Region</span>
                            <span>Login Device</span>
                            <span>Time</span>
                        </div>
                        <div className="profile__page__login__history">
                            <span>India Jalandhar(103.**.199)</span>
                            <span>Android</span>
                            <span>2020/09/02 14:38:51</span>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="lower-div" >
                <Footer />
            </div>
        </div >
    )
}

export default Profile
