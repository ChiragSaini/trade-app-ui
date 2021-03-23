import React, { useState } from "react";
import "./styles.css";
import { Alert, Label, Input } from "reactstrap"

import InputField from "../InputField";
import MyModal from "../../components/Modal"
import { Link } from "react-router-dom";

import { useForm } from "react-form";
import TermsAndConditions from "../../screens/TermsAndConditions";

function MyForm({ fields, debug, btnName, onSubmit, resetPassword, termsAndConditions }) {
    const {
        Form,
        meta: { isSubmitting, canSubmit, isSubmitted }
    } = useForm({
        onSubmit: onSubmit,
        debugForm: debug
    });

    const modalBody = <><h3>Terms and Conditions</h3>
        <small>2019/08/13 13:50:35 Read more</small>
        <br />
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, expedita nesciunt similique doloribus ipsam distinctio libero quaerat a amet soluta sit. Minima optio dolores excepturi maxime, iste quam quas inventore aspernatur facilis alias sunt voluptatem magni cumque ipsa praesentium minus, ratione quod iusto quo dolore voluptas quae ducimus? Cupiditate nesciunt soluta repellendus quo, fuga facere nisi dolores rem cumque quaerat praesentium. Perspiciatis facilis consequuntur, assumenda omnis atque excepturi molestiae, nam quos dolorum officia aliquam sed magnam optio accusantium ea distinctio temporibus a ut repudiandae. Architecto eum nihil laudantium perspiciatis, consequuntur rerum quibusdam, ipsum ut laboriosam eaque quae reiciendis distinctio iusto?</p>

        <p>Summary of Terms of Use</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione rem ut iste? Velit pariatur laboriosam labore nihil quasi quidem consectetur nemo quod eos autem eum, tenetur totam libero vero omnis, sapiente beatae distinctio explicabo itaque? Id, ducimus nemo laboriosam officia aliquid, cupiditate exercitationem repellendus sequi reiciendis veritatis provident dignissimos autem debitis perspiciatis aperiam fuga labore doloremque soluta? Quis id vero commodi! Totam perferendis provident praesentium nostrum rem error! Sint a tenetur ullam rem, fugit similique necessitatibus ea impedit velit voluptate distinctio expedita libero sit minus, soluta nesciunt, nam non? Alias nesciunt obcaecati aut debitis perspiciatis dolore repellat nemo similique.</p>

        <p>Our Services</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quam quibusdam non vitae porro tempore? Fugiat natus soluta nulla modi rerum dignissimos. Sunt eum pariatur in exercitationem nostrum explicabo, at repudiandae? Fugiat vel, minima voluptatibus quidem eaque inventore saepe soluta beatae perspiciatis incidunt, dignissimos magnam! Quidem eaque corporis ratione delectus esse quo iusto suscipit voluptatem doloremque aspernatur? Incidunt explicabo minus quas quaerat fugit maiores iusto ipsa nihil perferendis sed ab, et, corporis porro aspernatur eveniet? Commodi reprehenderit doloribus totam dignissimos enim debitis architecto alias ipsa facere magnam recusandae nobis, veniam, autem ab incidunt ad atque nostrum corporis, delectus ullam? Corporis?</p>

        <p>Elligibilty and Acceptable Use</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, aliquam accusamus? Perferendis natus dolorum dolore nam ea. Cumque deserunt, fuga ex cum eius atque! Consequatur animi nihil et qui, sapiente quia ipsam recusandae fugit rem sed distinctio ex minus? Eveniet veniam earum in necessitatibus aliquid. Necessitatibus quis esse quam voluptas officiis unde maxime similique a? Facilis laboriosam eum ad, tempora neque harum ut illum eos pariatur deleniti laudantium cumque earum, nostrum ea vero, perspiciatis obcaecati nesciunt hic veritatis possimus nam. Qui eum earum exercitationem totam adipisci temporibus nemo quod similique soluta itaque perspiciatis quo cupiditate, blanditiis ipsum labore ex accusantium?</p>

        <p>Complete Terms of Use</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum, esse veritatis corrupti voluptate possimus vel doloribus eius repudiandae tempore, nemo laudantium ad placeat. Laborum aliquid labore blanditiis fuga. Recusandae animi debitis enim quidem magni ducimus! Nisi quia ipsum et vel doloribus earum minus quis odit, architecto, tempore soluta qui ex consequatur quam ipsa omnis velit delectus fugit sapiente ad cum! Modi ipsam laborum at voluptatibus cupiditate officia recusandae maxime iusto accusantium ullam nisi explicabo cum odit, dolorum eos inventore similique, nostrum quidem, veniam veritatis itaque! Inventore, alias minima minus fuga ex, earum, totam officiis dicta corrupti expedita sed voluptatem?</p></>

    return (
        <Form>
            {
                isSubmitted &&
                <Alert color="success" >
                    A reset Link has been sent to your Email
                </Alert >
            }
            {
                fields && fields.map((field, idx) => {
                    return (
                        <div key={idx}>
                            <label>
                                {field.label}:
                            </label>
                            <InputField field={field.name} validate={field.validate} type={field.type} defaultValue={field.defaultValue} redBorder={false} />
                        </div>
                    )
                })
            }
            <div>
                {
                    termsAndConditions &&
                    <>
                        <div>
                        </div>
                        <div className="checkbox-section">
                            <MyModal body={modalBody} buttonLabel={"I Agree to Terms and Conditions"} />
                            <Input type="checkbox" className="my-checkbox" />
                        </div>
                    </>
                }
                <button className="form-submit-button" type="submit" disabled={!canSubmit}>
                    {btnName}
                </button>
                {
                    resetPassword && <div className="reset-password-button"><Link to="/resetpassword"><span>Forgot Password?</span></Link></div>
                }
            </div>
        </Form>
    );
}

export default MyForm