<template>
	<v-layout>
		<v-flex>
			<v-card>
				<v-toolbar flat color="white">
					<v-toolbar-title v-html="labels.title"></v-toolbar-title>
					<v-divider class="mx-2" inset vertical></v-divider>
					<v-spacer></v-spacer>
					<v-dialog v-model="form_dialog">
						<v-btn slot="activator" color="primary" dark v-html="labels.new_item"> </v-btn>
						
						<v-card>
							<v-card-title>
								<span class="headline" v-html="labels.form_title"></span>
							</v-card-title>

							<v-card-text>
								<v-layout>
									<v-flex>
										<v-text-field v-model="item_model.nombre" label="Nombre" autofocus clearable></v-text-field>
									</v-flex>
								</v-layout>
							</v-card-text>

							<v-card-actions>
								<v-layout>
									<v-spacer></v-spacer>
									<v-btn color="primary" @click="form_dialog = false">Cancel</v-btn>
									<v-btn color="primary" @click="form_dialog = true">Save</v-btn>
								</v-layout>
							</v-card-actions>
							
						</v-card>
					</v-dialog>
			</v-toolbar>

				<v-data-table :headers="headers" :items="desserts" :search="search" :pagination.sync="pagination" 
				:total-items="totalDesserts" class="elevation-1" :loading="loading">

					<template slot="items" slot-scope="props">
						<td>{{ props.item.name }}</td>
						<td class="text-md-right">{{ props.item.calories }}</td>
						<td class="text-md-right">{{ props.item.fat }}</td>
						<td class="text-md-right">{{ props.item.carbs }}</td>
						<td class="text-md-right">{{ props.item.protein }}</td>
						<td class="text-md-right">{{ props.item.iron }}</td>
					</template>
					<v-alert slot="no-results" :value="true" color="error" icon="warning">
						Your search for "{{ search }}" found no results.
					</v-alert>

				</v-data-table>

			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
  export default {
    layout: 'vuetify_one',
    data: () =>
    ({
			item_model: {},
			form_dialog: false,
    	labels:
	    {
	    	title: 'Paises',
	    	new_item: 'Crear Pais',
	    	form_title: 'Formulario Pais'
	    }
    })
  }
</script>
