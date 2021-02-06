import React from 'react'
import { Modal, Button, Spin } from 'antd';
import Loader from 'react-loader-spinner'

const ModalLoading = (props) => {
    const { visible } = props
    return (
        <Modal
            visible={visible}
            zIndex={9999}
            closable={false}
            centered
            footer={null}
            transitionName={"fade"}
            maskTransitionName={"fade"}
        >
            <div className={"modalLoadingContainer"}>
            <Loader
                type="Puff"
                color="#001529"
                height={150}
                width={150}
            />
          </div>
        </Modal>
    )
}

export default ModalLoading