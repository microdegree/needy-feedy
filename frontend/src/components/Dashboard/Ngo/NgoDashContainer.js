import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import NgoDashUI from './1DashboardHome/NgoDashUI';
import NgoDashHeader from './0CommonComponents/NgoDashHeader'
import DetailsComponent from './2MoreDetails/DetailsComponent';
import { Route } from "react-router-dom";
import Confirmation from './3Confirmation/Confirmation';
import PaymentGateway from './4PaymentGateway/PaymentGateway';
import MyOrders from './MyOrders';

const NgoDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <NgoDashHeader logout={props.history} />
            Hello {userInDash.name}
            <br /><br /><br /><br />
            <Route exact path="/ngoDashboard" component={NgoDashUI} />

            <Route exact path="/ngoDashboard/moreDetails" component={DetailsComponent} />
            <Route exact path="/ngoDashboard/confirmationPage" component={Confirmation} />
            <Route exact path="/ngoDashboard/paymentsGateway" component={PaymentGateway} />
            <Route exact path="/ngoDashboard/myOrders" component={MyOrders} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default NgoDashContainer
