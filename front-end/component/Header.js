import Head from 'next/head'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <Head>
            <meta charset="utf-8" />
            <title> Raffle </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="/static/assets/css/stack-interface.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/static/assets/css/iconsmind.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/static/assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/static/assets/css/flickity.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/static/assets/css/theme.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/static/assets/css/custom.css" rel="stylesheet" type="text/css" media="all" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500" rel="stylesheet" type="text/css" />
            <link href="/static/assets/css/font-raleway.css" rel="stylesheet" type="text/css" />
        </Head>
    )
  }
}