import Layout from '@/components/Layout'
import { Address } from '@/components/Address/Address'
import { Tracking } from '@/components/Tracking/Tracking'

export const App = () => {
  return (
    <>
      <Layout>
        <Tracking />
        <Address />
      </Layout>
    </>
  )
}
