import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base'
import { StyleSheet } from 'react-native'
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
			<Container >
					<Toolbar judul = {this.state.data.DARI}  aksi = {this.goBack} icon='md-arrow-round-back'/>
					<Content padder>
            <Text style={styles.Label}>Dari</Text>
            <Text>{this.state.data.DARI}</Text>
            <Text style={styles.Label}>Waktu Kirim</Text>
            <Text>{this.state.data.WAKTU_KIRIM}</Text>
            <Text style={styles.Label}>Perihal</Text>
            <Text>{this.state.data.PERIHAL}</Text>
						<Text style={styles.Label}>Isi Surat</Text>
						<HTMLView
							value={this.state.data.ISI_SURAT}
						/>
            <Button block warning>
              <Text>Balas</Text>
            </Button>
					</Content>
			</Container>
    )
  }
}

const styles = StyleSheet.create({
  Label: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default DetailSuratPersonalPage