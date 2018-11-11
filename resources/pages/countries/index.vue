<template>
	<v-card>
		<v-toolbar flat color="white">
			<v-toolbar-title>{{ this.$lang("contries") }}</v-toolbar-title>
			<v-divider class="mx-2" inset vertical></v-divider>
			<v-spacer></v-spacer>

		
			<v-dialog v-model="form.dialog" max-width="290" persistent>
				<v-btn slot="activator" color="primary" dark> {{ this.$lang("contry_create") }}</v-btn>
				
				<v-card>
					<v-form ref="form" v-model="form.is_valid" lazy-validation>

						<v-card-title>
							<span class="headline">{{ this.$lang("contry_form") }}</span>
						</v-card-title>

						<v-card-text>
							<v-layout>
								<v-flex>

									<v-text-field 
									v-model="form.item.nombre" 
									:label="this.$lang('name')" 
									:rules="[ value => !!value || this.$lang('form_name_is_required') ]" 
									autofocus 
									clearable 
									required>
									</v-text-field>

								</v-flex>
							</v-layout>
						</v-card-text>
					
						<v-card-actions>
							<v-layout>
								<v-spacer></v-spacer>
								<v-btn color="primary" @click="cancel_form">{{this.$lang('cancel')}}</v-btn>
								<v-btn color="primary" @click="save_form">{{this.$lang('save')}}</v-btn>
							</v-layout>
						</v-card-actions>
					</v-form>
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
</template>

<script>
  export default {
	
    layout: 'vuetify_one',
    data:() =>
    ({
		form:
		{
			item: {},
			is_valid: false,
			dialog: false
		}
	}),
	methods: 
	{
		cancel_form() 
		{
			this.$refs.form.reset();
			this.form.dialog = false;
		},
		save_form() 
		{
			console.log( this );
			//this.$parent.show_alert("Saving data to adonis js");
			

			if( this.$refs.form.validate() )
			{
				console.log( 'IS VALID' );
			}
			else
				console.log( 'IS NO VALID' );
        }
    }
  }
</script>
