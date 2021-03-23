import React from 'react';
import "./styles.css";

import { Row, Col, Container, Input } from "reactstrap"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Footer from "../../components/Footer";

const BasicInformation = () => {
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
        <div className="basic__info">
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container className="basic__info__container">
                    <Row style={{ background: "#f5f8f9", padding: "10px" }}>
                        <span style={{ fontWeight: "600" }}>Basic Information</span>
                    </Row>
                    <div className="basic__info__container__details">
                        <Row className="basic__info__container__details__row">
                            <Col md="2" className="basic__info__container__details__row__title">
                                Photo
                            </Col>
                            <Col md="10" className="basic__info__container__details__row__content">
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA3ODwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxjaXJjbGUgaWQ9InBhdGgtMSIgY3g9IjMyIiBjeT0iMzIiIHI9IjMyIj48L2NpcmNsZT4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9Ii01LjQyOTUzOTg1JSIgeDI9IjUzLjI2MzAyMTMlIiB5Mj0iMTA5LjcwNzE1OCUiIGlkPSJsaW5lYXJHcmFkaWVudC0zIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0RERTNFQiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQkRDOUQ5IiBvZmZzZXQ9Ijk2Ljk2MDgwMiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBGN0RGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aCBkPSJNNDguMjkwOTIxNyw1MC41NDIzMiBMMzkuNjUxNjg3LDQ2LjMzOTQ0IEMzOC44MzY4Njk2LDQ1Ljk0MjU2IDM4LjMzMDQzNDgsNDUuMTQ1MjggMzguMzMwNDM0OCw0NC4yNTgyNCBMMzguMzMwNDM0OCw0MS4yODI5NiBDMzguNTM3NTMwNCw0MS4wMzY1NiAzOC43NTU0NzgzLDQwLjc1NTg0IDM4Ljk4MDY2MDksNDAuNDQ2MDggQzQwLjEwMTE0NzgsMzguOTA2MDggNDAuOTk5MTY1MiwzNy4xOTE4NCA0MS42NTIxMDQzLDM1LjM0Mjk2IEM0Mi45MjgxMzkxLDM0Ljc3MzYgNDMuNzU2NTIxNywzMy41NDYgNDMuNzU2NTIxNywzMi4xNiBMNDMuNzU2NTIxNywyOC42NCBDNDMuNzU2NTIxNywyNy43OTI1NiA0My40MzA5NTY1LDI2Ljk3MTUyIDQyLjg1MjE3MzksMjYuMzMgTDQyLjg1MjE3MzksMjEuNjQ5MjggQzQyLjkwMjgxNzQsMjEuMTY1MjggNDMuMTAxNzczOSwxOC4yODQxNiA0MC45NjAyNzgzLDE1LjkwNzI4IEMzOS4xMDI3NDc4LDEzLjg0NTQ0IDM2LjA4ODU1NjUsMTIuOCAzMiwxMi44IEMyNy45MTE0NDM1LDEyLjggMjQuODk3MjUyMiwxMy44NDU0NCAyMy4wMzk3MjE3LDE1LjkwNjQgQzIwLjg5ODIyNjEsMTguMjgzMjggMjEuMDk3MTgyNiwyMS4xNjUyOCAyMS4xNDc4MjYxLDIxLjY0OTI4IEwyMS4xNDc4MjYxLDI2LjMzIEMyMC41NjkwNDM1LDI2Ljk3MTUyIDIwLjI0MzQ3ODMsMjcuNzkyNTYgMjAuMjQzNDc4MywyOC42NCBMMjAuMjQzNDc4MywzMi4xNiBDMjAuMjQzNDc4MywzMy4yMzA5NiAyMC43NDM1ODI2LDM0LjIyOTc2IDIxLjU5NzI4NywzNC44OTU5MiBDMjIuNDI1NjY5NiwzOC4wODc2OCAyNC4xNTkzMDQzLDQwLjQ5MjcyIDI0Ljc2NTIxNzQsNDEuMjY0NDggTDI0Ljc2NTIxNzQsNDQuMTc2NCBDMjQuNzY1MjE3NCw0NS4wMjgyNCAyNC4yODc3MjE3LDQ1LjgwOTY4IDIzLjUxOTkzMDQsNDYuMjE4IEwxNS40NTIyNDM1LDUwLjUwMDA4IEMxMi44Mjg3MzA0LDUxLjg5MzEyIDExLjIsNTQuNTYzMDQgMTEuMiw1Ny40NzA1NiBMMTEuMiw2MC4zMiBDMTEuMiw2NC40OTY0OCAyNC44MDU5MTMsNjUuNiAzMiw2NS42IEMzOS4xOTQwODcsNjUuNiA1Mi44LDY0LjQ5NjQ4IDUyLjgsNjAuMzIgTDUyLjgsNTcuNjQyMTYgQzUyLjgsNTQuNjE2NzIgNTEuMDcxNzkxMyw1MS44OTU3NiA0OC4yOTA5MjE3LDUwLjU0MjMyIFoiIGlkPSJwYXRoLTQiPjwvcGF0aD4KICAgICAgICA8ZmlsdGVyIHg9Ii0zMy43JSIgeT0iLTE4LjklIiB3aWR0aD0iMTY3LjMlIiBoZWlnaHQ9IjE1My4wJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTUiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjE2MTQ1ODMzMyAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTc4Ij4KICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8ZyBpZD0iT3ZhbCIgZmlsbC1ydWxlPSJub256ZXJvIj48L2c+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTIpIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9IlBhdGgiIG1hc2s9InVybCgjbWFzay0yKSI+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItNSkiIHhsaW5rOmhyZWY9IiNwYXRoLTQiPjwvdXNlPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTQiPjwvdXNlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="" />
                                <Link>&nbsp;Change</Link>
                            </Col>
                        </Row>
                        <Row className="basic__info__container__details__row">
                            <Col md="2" className="basic__info__container__details__row__title">
                                NickName
                            </Col>
                            <Col md="10" className="basic__info__container__details__row__content">
                                <Link>&nbsp;Change</Link>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="basic__info__container__details__row">
                            <Col md="2" className="basic__info__container__details__row__title">
                                Phone
                            </Col>
                            <Col md="10" className="basic__info__container__details__row__content">
                                <Link>&nbsp;Edit</Link>
                            </Col>
                        </Row>
                        <Row className="basic__info__container__details__row">
                            <Col md="2" className="basic__info__container__details__row__title">
                                Email
                            </Col>
                            <Col md="10" className="basic__info__container__details__row__content">
                                <span>ch**@**.com</span>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="basic__info__container__details__row">
                            <Col md="2" className="basic__info__container__details__row__title">
                                Language
                            </Col>
                            <Col md="10" className="basic__info__container__details__row__content">
                                <Input type="select" name="languageSelect" className="small-size-select-field" >
                                    <option>English</option>
                                    <option>French</option>
                                    <option>Russian</option>
                                    <option>Hindi</option>
                                    <option>Spanish</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row className="basic__info__container__details__row">
                            <Col md="2" className="basic__info__container__details__row__title">
                                Currency
                            </Col>
                            <Col md="10" className="basic__info__container__details__row__content">
                                <Input type="select" name="languageSelect" className="small-size-select-field" >
                                    <option>USD</option>
                                    <option>INR</option>
                                    <option>CAD</option>
                                    <option>YEN</option>
                                    <option>PND</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row className="basic__info__container__details__row">
                            <Col md="2" className="basic__info__container__details__row__title">
                                TimeZone
                            </Col>
                            <Col md="10" className="basic__info__container__details__row__content">
                                <Input type="select" name="languageSelect" className="small-size-select-field" >
                                    <option timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value="-12">(GMT-12:00) International Date Line West</option>
                                    <option timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value="-11">(GMT-11:00) Midway Island, Samoa</option>
                                    <option timeZoneId="3" gmtAdjustment="GMT-10:00" useDaylightTime="0" value="-10">(GMT-10:00) Hawaii</option>
                                    <option timeZoneId="4" gmtAdjustment="GMT-09:00" useDaylightTime="1" value="-9">(GMT-09:00) Alaska</option>
                                    <option timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                                    <option timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Tijuana, Baja California</option>
                                    <option timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value="-7">(GMT-07:00) Arizona</option>
                                    <option timeZoneId="8" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                                    <option timeZoneId="9" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                                    <option timeZoneId="10" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Central America</option>
                                    <option timeZoneId="11" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                                    <option timeZoneId="12" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                                    <option timeZoneId="13" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Saskatchewan</option>
                                    <option timeZoneId="14" gmtAdjustment="GMT-05:00" useDaylightTime="0" value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                                    <option timeZoneId="15" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                                    <option timeZoneId="16" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Indiana (East)</option>
                                    <option timeZoneId="17" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                                    <option timeZoneId="18" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Caracas, La Paz</option>
                                    <option timeZoneId="19" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Manaus</option>
                                    <option timeZoneId="20" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Santiago</option>
                                    <option timeZoneId="21" gmtAdjustment="GMT-03:30" useDaylightTime="1" value="-3.5">(GMT-03:30) Newfoundland</option>
                                    <option timeZoneId="22" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Brasilia</option>
                                    <option timeZoneId="23" gmtAdjustment="GMT-03:00" useDaylightTime="0" value="-3">(GMT-03:00) Buenos Aires, Georgetown</option>
                                    <option timeZoneId="24" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Greenland</option>
                                    <option timeZoneId="25" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Montevideo</option>
                                    <option timeZoneId="26" gmtAdjustment="GMT-02:00" useDaylightTime="1" value="-2">(GMT-02:00) Mid-Atlantic</option>
                                    <option timeZoneId="27" gmtAdjustment="GMT-01:00" useDaylightTime="0" value="-1">(GMT-01:00) Cape Verde Is.</option>
                                    <option timeZoneId="28" gmtAdjustment="GMT-01:00" useDaylightTime="1" value="-1">(GMT-01:00) Azores</option>
                                    <option timeZoneId="29" gmtAdjustment="GMT+00:00" useDaylightTime="0" value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                                    <option timeZoneId="30" gmtAdjustment="GMT+00:00" useDaylightTime="1" value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                                    <option timeZoneId="31" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                                    <option timeZoneId="32" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                                    <option timeZoneId="33" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                                    <option timeZoneId="34" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                                    <option timeZoneId="35" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) West Central Africa</option>
                                    <option timeZoneId="36" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Amman</option>
                                    <option timeZoneId="37" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                                    <option timeZoneId="38" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Beirut</option>
                                    <option timeZoneId="39" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Cairo</option>
                                    <option timeZoneId="40" gmtAdjustment="GMT+02:00" useDaylightTime="0" value="2">(GMT+02:00) Harare, Pretoria</option>
                                    <option timeZoneId="41" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                                    <option timeZoneId="42" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Jerusalem</option>
                                    <option timeZoneId="43" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Minsk</option>
                                    <option timeZoneId="44" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Windhoek</option>
                                    <option timeZoneId="45" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                                    <option timeZoneId="46" gmtAdjustment="GMT+03:00" useDaylightTime="1" value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                                    <option timeZoneId="47" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Nairobi</option>
                                    <option timeZoneId="48" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Tbilisi</option>
                                    <option timeZoneId="49" gmtAdjustment="GMT+03:30" useDaylightTime="1" value="3.5">(GMT+03:30) Tehran</option>
                                    <option timeZoneId="50" gmtAdjustment="GMT+04:00" useDaylightTime="0" value="4">(GMT+04:00) Abu Dhabi, Muscat</option>
                                    <option timeZoneId="51" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Baku</option>
                                    <option timeZoneId="52" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Yerevan</option>
                                    <option timeZoneId="53" gmtAdjustment="GMT+04:30" useDaylightTime="0" value="4.5">(GMT+04:30) Kabul</option>
                                    <option timeZoneId="54" gmtAdjustment="GMT+05:00" useDaylightTime="1" value="5">(GMT+05:00) Yekaterinburg</option>
                                    <option timeZoneId="55" gmtAdjustment="GMT+05:00" useDaylightTime="0" value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                                    <option timeZoneId="56" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Sri Jayawardenapura</option>
                                    <option timeZoneId="57" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                                    <option timeZoneId="58" gmtAdjustment="GMT+05:45" useDaylightTime="0" value="5.75">(GMT+05:45) Kathmandu</option>
                                    <option timeZoneId="59" gmtAdjustment="GMT+06:00" useDaylightTime="1" value="6">(GMT+06:00) Almaty, Novosibirsk</option>
                                    <option timeZoneId="60" gmtAdjustment="GMT+06:00" useDaylightTime="0" value="6">(GMT+06:00) Astana, Dhaka</option>
                                    <option timeZoneId="61" gmtAdjustment="GMT+06:30" useDaylightTime="0" value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
                                    <option timeZoneId="62" gmtAdjustment="GMT+07:00" useDaylightTime="0" value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                                    <option timeZoneId="63" gmtAdjustment="GMT+07:00" useDaylightTime="1" value="7">(GMT+07:00) Krasnoyarsk</option>
                                    <option timeZoneId="64" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                                    <option timeZoneId="65" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Kuala Lumpur, Singapore</option>
                                    <option timeZoneId="66" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                                    <option timeZoneId="67" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Perth</option>
                                    <option timeZoneId="68" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Taipei</option>
                                    <option timeZoneId="69" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                                    <option timeZoneId="70" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Seoul</option>
                                    <option timeZoneId="71" gmtAdjustment="GMT+09:00" useDaylightTime="1" value="9">(GMT+09:00) Yakutsk</option>
                                    <option timeZoneId="72" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Adelaide</option>
                                    <option timeZoneId="73" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Darwin</option>
                                    <option timeZoneId="74" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Brisbane</option>
                                    <option timeZoneId="75" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                                    <option timeZoneId="76" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Hobart</option>
                                    <option timeZoneId="77" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Guam, Port Moresby</option>
                                    <option timeZoneId="78" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Vladivostok</option>
                                    <option timeZoneId="79" gmtAdjustment="GMT+11:00" useDaylightTime="1" value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                                    <option timeZoneId="80" gmtAdjustment="GMT+12:00" useDaylightTime="1" value="12">(GMT+12:00) Auckland, Wellington</option>
                                    <option timeZoneId="81" gmtAdjustment="GMT+12:00" useDaylightTime="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                                    <option timeZoneId="82" gmtAdjustment="GMT+13:00" useDaylightTime="0" value="13">(GMT+13:00) Nuku'alofa</option>
                                </Input>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="lower-div">
                <Footer />
            </div>
        </div>
    )
}

export default BasicInformation;