# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#Risk.create(user_id: 1, risk_score_title: 'SCAI Bleeding', risk_score: 28)
#PreCheck.create(user_id: 1, check_name: 'Pre cath imaging?', check_status: 0)
#PreCheck.create(user_id: 1, check_name: 'Pregnancy?', check_status: 0)

risks = Risk.create([{user_id: 1, risk_score_title: 'SCAI Acute Kidney Injury', risk_score: 33},
	{user_id: 1, risk_score_title: 'SCAI Bleeding', risk_score: 8},
	{user_id: 1, risk_score_title: 'SCAI PCI Mortality', risk_score: 14},
	{user_id: 1, risk_score_title: 'SYNTAX Score', risk_score: 23},
	{user_id: 1, risk_score_title: 'EUROScore', risk_score: 6}])
counters = Counter.create([{user_id: 1, counter_title: 'Case Duration'},
	{user_id: 1, counter_title: 'Fluoroscopy Time'}])
pre_checks = PreCheck.create([{user_id: 1, check_name: 'Pregnancy?', check_status: false},
	{user_id: 1, check_name: 'Pre-cath imaging?', check_status: false},
	{user_id: 1, check_name: 'Known allergies?', check_status: false},
	{user_id: 1, check_name: 'Confirm meds?', check_status: false},
	{user_id: 1, check_name: 'Radial vs Femoral?', check_status: false},
	{user_id: 1, check_name: 'Confirm patient name and ID?', check_status: false}])
