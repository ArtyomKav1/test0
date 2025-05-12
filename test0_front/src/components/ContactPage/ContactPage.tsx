import { Form, Input, Button, ConfigProvider } from 'antd';

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';


function MainPage() {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMes, setErrorMes] = useState('')
    const navigate = useNavigate();

    const API_BASE_URL = process.env.NODE_ENV === 'production'
        ? 'http://212.23.211.54:3000/api'
        : 'http://localhost:3000/api';

    const onFinish = async (values: { name: string, email: string, message: string }) => {
        console.log('Received values:', values)
        setLoading(true)
        try {
            const response = await axios.post(API_BASE_URL, values)
            if (response.data.success) {
                console.log('Форма успешно отправлена!')
                form.resetFields()
                navigate('/confirm')
            } else {
                setError(true)
                setErrorMes('Ошибка при отправке формы')
            }
        } catch (error) {
            setError(true)
            console.error('Ошибка:', error)
            setErrorMes('Произошла ошибка при отправке формы')
        } finally {
            setLoading(false)
        }
    }

    const back = () => {
        setErrorMes('')
        setError(false)
    }

    return (
        <div className='relative'>
            {loading && <div className='bg-black/60 fixed inset-0 w-screen h-screen z-50 flex items-center justify-center'>
                <div className='w-[3px] h-[40px] bg-white animate-spin'></div>
            </div>}
            {error && <div className='bg-gray-300 w-[40%] h-[40px] absolute inset-0 mx-auto flex items-center justify-center rounded-b-[8px] ' onClick={back}>
                <div>{errorMes}</div>
            </div>}
            <div className="bg-gray-100 w-screen h-[800px] max-sm:h-[600px] flex flex-col items-center justify-center">
                <div className="text-[72px] pb-[40px] max-sm:text-[24px] max-xl:text-[54px]">Only CTA on the page</div>
                <div className="bg-white rounded-[8px] flex flex-col border border-gray-200 p-[20px] w-[350px]">

                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 16,
                                colorText: '#333',
                            },
                            components: {
                                Input: {
                                    fontFamily: "'Playfair Display', serif",
                                },
                            },
                        }}
                    >
                        <Form
                            form={form}
                            name="hiring_form"
                            layout="vertical"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="name"
                                label="Имя"
                                rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
                                style={{ flex: 1 }}
                            >
                                <Input placeholder="Введите ваше имя" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Пожалуйста, введите ваш email' },
                                    { type: 'email', message: 'Пожалуйста, введите корректный email' }
                                ]}
                            >
                                <Input placeholder="example@domain.com" />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: 'Пожалуйста, напишите сообщение' }]}
                            >
                                <Input.TextArea rows={4} placeholder="" style={{ maxHeight: '150px', resize: 'vertical' }} />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        borderColor: '#000'
                                    }}
                                >
                                    Отправить заявку
                                </Button>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>


                </div>
            </div>
        </div>
    )
}

export default MainPage
