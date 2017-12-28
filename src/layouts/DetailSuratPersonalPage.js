import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import HTMLView from 'react-native-htmlview'

import Toolbar from '../components/Toolbar'


class DetailSuratPersonalPage extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}
	
	id = this.props.navigation.state.params.idSurat

  load = () => {
    api.post('/surat_masuk/detail_sm_by_id_distribusi_surat', {
      api_kode: '8000',
      api_subkode: '1',
      api_search: [
        this.id
      ]
    })
      .then(response => {
        if (response.data.status === 'ok') {
					let responseData = response.data
          this.setState({data: responseData.data})
        }
        else {
          alert('Terjadi kesalahan pada sistem. Hubungi PTIPD UIN Sunan Kalijaga')
        }
      })
      .catch(e => {
        alert('Mohon maaf terjadi kesalahan, silahkan cek koneksi anda')
      })
  }

  componentDidMount () {
    this.load()
	}
	
	goBack = () => this.props.navigation.goBack()
 
  render(){
    return(
			<Container>
					<Toolbar judul = {this.state.data.DARI}  aksi = {this.goBack} icon='md-arrow-round-back'/>
					<Content style={{alignSelf: 'center'}}>
						<Text>ISi SURAT</Text>
						<HTMLView
							value={this.state.data.ISI_SURAT}
						/>
					</Content>
			</Container>
    )
  }
}

export default DetailSuratPersonalPage